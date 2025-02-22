const redis=require("redis");
const client=redis.createClient({
    socket:{
        host:process.env.REDIS_HOST,
        port:process.env.REDIS_PORT
    }
});
client.connect()
    .then(()=>console.log("Connectedto Redis"))
    .catch((err)=>console.error("Redis Connection error:", err));

    module.exports=client;
