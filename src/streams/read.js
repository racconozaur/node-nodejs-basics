import fs from 'fs'

const read = async (path) => {
    // Write your code here 
    let myReadStream = fs.createReadStream(path, 'utf8')
    myReadStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read('files/fileToRead.txt');