import redisClient from '../redisClient.js';

const WINDOW_SIZE_IN_SECONDS = 60;
const MAX_WINDOW_REQUEST_COUNT = 5;

const rateLimiting = async function rateLimiter(req, res, next){
    try{
        const ip = req.ip;
        const key = `Rate Limit: ${ip}`;

        const currentCount = await redisClient.get(key);

        if(currentCount == null){
            await redisClient.set(key, 1, {
                EX: WINDOW_SIZE_IN_SECONDS,
                NX: true,
            });
            return next(); 
        }

        if(parseInt(currentCount) >= MAX_WINDOW_REQUEST_COUNT){
            return res.status(429).json({message: "Too many requests. Try again later."});
        }
      
        await redisClient.incr(key);
        next();
    }
    catch(err){
        console.error("Rate Limiter Error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default rateLimiting;