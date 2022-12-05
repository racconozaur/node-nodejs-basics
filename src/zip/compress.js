import zlib from 'zlib'
import fs from 'fs'

const compress = async (path) => {
    const gzip = zlib.createGzip();
    let inp = fs.createReadStream(path);
    let out = fs.createWriteStream('files/archive.gz');
    inp.pipe(gzip).pipe(out);

    // fs.unlink(path)

};

await compress('files/fileToCompress.txt');