import fs from 'fs'

const rename = async (path) => {
    // Write your code here 

    
    await fs.access(path, fs.constants.R_OK, (err) => {
        if(!err){
            
            fs.rename(path, 'files/properFilename.md', () =>{})
        }
        else{
            
            console.error('FS operation failed');
        }
    });

}; 

rename('files/wrongFilename.txt')