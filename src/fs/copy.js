import fs from 'fs'

const copy = async (from, to) => {
    if (!fs.existsSync(to)){
        await fs.mkdirSync(to);
        await fs.readdir(from, (err, files) => {
            files.forEach(file => {
                console.log(file);
                fs.copyFile(`${from}/${file}`, `${to}/${file}`, (err) => {})
            });
          });
    }
    else{
        console.error('FS operation failed');
    }
    

};

copy('files', 'files-copy');
