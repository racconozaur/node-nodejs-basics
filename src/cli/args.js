const parseArgs = () => {
    // Write your code here 
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
      });
};

parseArgs();