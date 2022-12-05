import crypto from 'node:crypto'
import fs from 'fs'

const calculateHash = async (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log('FS operation failed');
        }
        else{
            console.log(data);
            const hash = crypto.createHash('sha256').update(data).digest('hex');
            console.log(hash);
        }
      });

};

calculateHash('files/fileToCalculateHashFor.txt');