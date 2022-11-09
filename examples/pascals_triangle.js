/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const result = [];
    
    for (let i=0;i<numRows;i++) {
        const row = [];

        // first one is always 1
        row.push(1);

        if (i > 0) {
            const totalEntries = i + 1;
            for (let j=1;j<totalEntries-1;j++) {
                // row x position y = row (x-1) position (y-1) + row (x-1) position y
                //console.log(`row ${i} column ${j} fetching values from row ${i-1} and positions ${j-1} and ${j}`);
                const row_index = i;
                const position = j;
                const value1 = result[row_index-1][position-1];
                const value2 = result[row_index-1][position];
                const sum = value1 + value2;
                row.push(sum);
            }

            // last one is always 1
            row.push(1);
        }

        result.push(row);
    }

    return result;
};

const triangle = generate(6);

for (const row of triangle) {
    console.log(row.join(", "));
}
console.log("done");