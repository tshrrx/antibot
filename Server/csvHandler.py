import torch
import torch.nn as nn
import torch.nn.functional as F
import pandas as pd
import numpy as np
from torch.utils.data import TensorDataset, DataLoader

def pad_to_fixed_size_pre(sequence, target_shape=(50, 2), padding_value=0):
    padded_sequence = np.full(target_shape, padding_value, dtype=sequence.dtype)
    rows_to_copy = min(sequence.shape[0], target_shape[0])
    padded_sequence[-rows_to_copy:, :] = sequence[:rows_to_copy, :]
    return padded_sequence

def getNumpy(path, time_steps = 50):
    real_dataframe = pd.read_csv(path)
    
    # real_seq_indices = real_seq[real_seq["state"] == "Pressed"].index
    
    dragging = 0
    startInd = 0
    groupIndices = []
    for i in range(real_dataframe.shape[0]):
        if dragging == 0 and real_dataframe.at[i, "state"] == "Pressed":
            groupIndices.append([startInd, i])
            startInd = i+1
            dragging = 1
        if dragging == 1 and real_dataframe.at[i, "state"] == "Released":
            if i - startInd > 5:
                groupIndices.append([startInd, i])
            startInd = i+1
            dragging = 0
    
    real_seq_numpy = np.zeros((0, time_steps, 2))

    # print(groupIndices)
    for indexPair in groupIndices:
        real_seq_numpy = np.append(real_seq_numpy, np.expand_dims(pad_to_fixed_size_pre(real_dataframe[["x", "y"]][indexPair[0]:indexPair[1]+1][::3].to_numpy(), target_shape = (time_steps, 2)), axis = 0), axis = 0)
        # if real_seq_numpy.shape[0] >= 32:
        #     break
    
    # print(real_seq_numpy.shape)
    return real_seq_numpy


class LSTMModel(nn.Module):
    def __init__(self):
        super(LSTMModel, self).__init__()
        
        # Define the first LSTM layer with 128 units
        self.lstm1 = nn.LSTM(input_size=2, hidden_size=128, batch_first=True)
        
        # Define the second LSTM layer with 64 units
        self.lstm2 = nn.LSTM(input_size=128, hidden_size=64, batch_first=True)
        
        # Define a fully connected layer with 1 output unit
        self.fc = nn.Linear(64, 1)
        
        # LeakyReLU activation
        self.leaky_relu = nn.LeakyReLU(0.01)
        
    def forward(self, x):
        # Pass through the first LSTM layer
        x, _ = self.lstm1(x)
        x = self.leaky_relu(x)
        
        # Pass through the second LSTM layer
        x, _ = self.lstm2(x)
        x = self.leaky_relu(x)
        
        # Take the output of the last time step
        x = x[:, -1, :]
        
        # Pass through the dense layer with sigmoid activation
        x = self.fc(x)
        x = torch.sigmoid(x)
        
        return x

# Instantiate the model
model = LSTMModel()

model.load_state_dict(torch.load("/kaggle/working/model_weights"))
#Put model weight path here
npArr = getNumpy("/kaggle/input/sapimouse/sapimouse/user1/session_2020_05_14_1min.csv")
#Put input file path here
tensorArr = torch.tensor(npArr, dtype=torch.float32)
tensorLabels = torch.tensor(np.zeros((npArr.shape[0], 1)), dtype = torch.float32)
tensorDataset = TensorDataset(tensorArr, tensorLabels)
myLoader = DataLoader(tensorDataset, batch_size=32, shuffle=True)
print(tensorDataset)

# Evaluate the model on the test set
model.eval()  # Set the model to evaluation mode
correct = 0
total = 0

labelArray = []
with torch.no_grad():  # Disable gradient computation
    for inputs, labels in myLoader:
        outputs = model(inputs)
        predicted = (outputs >= 0.5)  # Convert sigmoid output to binary predictions
        for i in range(predicted.shape[0]):
            labelArray.append(int(predicted[i, 0]))
print(labelArray)
labelDF = pd.DataFrame(labelArray, columns = ["label"])
labelDF.to_csv("/kaggle/working/finalCsvPath.csv", index = False)