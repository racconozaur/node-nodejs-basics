import fs from 'fs'

const write = async (path) => {
    // Write your code here
    let myWriteStream = fs.createWriteStream(path) 
    process.stdin.on('data', data => {
        console.log(`You typed ${data.toString()}`);
        myWriteStream.write(data.toString())
        process.exit();
    });
};

await write('files/fileToWrite.txt');