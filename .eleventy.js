/* module.exports = {
    dir: {
        input: 'src',
        output: 'build'
    }
};
 */
module.exports = (eleventyConfig) => {
    eleventyConfig.addFilter("ticksToUtc", (ticks) => {
        let date = new Date(ticks);
        return date.toUTCString();
    });

    eleventyConfig.addFilter("now", () => { 
        return new Date(Date.now()).toUTCString(); 
    });

    eleventyConfig.addFilter("withThousandsSeparator", number => {
        return Number(number).toLocaleString(); 
    });

    eleventyConfig.addFilter("covid19Country", (data, population) => {
        let result = [];

        let lastData = 0;
        data.forEach(row => {
            let dt = new Date(row.Date);
            if (dt.getDate() == 7 || dt.getDate() == 21) {
                lastData = row.Confirmed;
            } else if (dt.getDate() == 15 || dt.getDate() == 28) {
                result.push({
                    'Confirmed': row.Confirmed,
                    'New': row.Confirmed - lastData,
                    'Incidence': (row.Confirmed - lastData) / population * 100000,
                    'Date': row.Date
                });
                lastData = row.Confirmed;
            }
        });

        return result;
    });

    return {
        dir: {
            input: 'src',
            output: 'build'
        }    
    };
};