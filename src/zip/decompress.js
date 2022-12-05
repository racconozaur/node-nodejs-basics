import zlib, { unzip } from 'zlib'
import fs from 'fs'

const decompress = async (path) => {
    // Write your code here 
    const unzip = zlib.createUnzip();
    let inp = fs.createReadStream(path);
    let out = fs.createWriteStream('files/fileToCompress1.txt');
    inp.pipe(unzip).pipe(out);
};

await decompress('files/archive.gz');