import fs from 'fs'

const remove = async (path) => {
    // Write your code here
    await fs.access(path, fs.constants.R_OK, (err) => {
        if(!err){
            fs.unlink(path, (err) => {})
            
        }
        else{
            console.error('FS operation failed');
        }
    }); 
};

await remove('files/fileToRemove.txt');