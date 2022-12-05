import fs from 'fs'

const read = async (path) => {
    // Write your code here 
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log('FS operation failed');
        }
        else{
            console.log(data);
        }
      });
    

};

read('files/fileToRead.txt');