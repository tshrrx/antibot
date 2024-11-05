export cosnt readCSV=()=>{
    try{
        const data = fs.readFileSync('data.csv', 'utf8');
        const rows = data.split('\n');
        const result = [];
        rows.forEach((row) => {
            const columns = row.split(',');
            result.push({
                x: columns[0],
                y: columns[1],
                timestamp: columns[2],
                button: columns[3],
                state: columns[4],
            });
        });
        return result;
    }catch(err){
        console.log(err);
    }
}