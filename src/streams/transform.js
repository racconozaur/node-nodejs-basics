import {Transform, pipeline} from 'stream'

const transform = async () => {
    // Write your code here
    const read = process.stdin
    const write = process.stdout

    const transform = new Transform({
        transform(chunk, enc, cb){
            const chunkStr = chunk.toString().trim()

            const reverseChunk = chunkStr.split('').reverse().join('')

            this.push(reverseChunk + '\n')

            cb()
        }
    })

    pipeline(read, transform, write, err => {console.log(`Err in ${err}`)})
};

await transform();