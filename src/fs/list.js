import fs from 'fs'

const list = async (path) => {
    // Write your code here 
    await fs.access(path, fs.constants.R_OK, (err) => {
        if(!err){
            
            fs.readdir(path, (err, files) => {
                let arr = []
                files.forEach(file => {
                    arr.push(file)
                });
                console.log(files);
              });
        }
        else{
            
            console.error('FS operation failed');
        }
    });
};

await list('files');