import fs from 'fs'

const create = async (path) => {
    // Write your code here 
    await fs.access(path, fs.constants.R_OK, (err) => {
        if(!err){
            
            console.error('FS operation failed');
        }
        else{
            const text = 'I am fresh and young'
            fs.writeFile(path, text, (err, data) => {})
        }
    });
    
};

await create('files/fresh.txt');