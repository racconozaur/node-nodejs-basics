const parseEnv = (prefix) => {
    // Write your code here 
    process.env.RSS_we1 = 'ahoy';
    process.env.RSS_we2 = 'asd';
    let obj = process.env

    for(let key in obj){
        if(key.slice(0, prefix.length) == prefix){
            console.log(`${key}=${obj[key]}`);
        }
    }

};

parseEnv('RSS_');

