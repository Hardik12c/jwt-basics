require("dotenv").config();
require("express-async-errors");
const express=require("express");
const notfound=require('./middleware/not-found');
const connectdb=require('./db/connect');
const jwtrouter=require('./routes/jwtrouter');

const app=express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1',jwtrouter);
app.use(notfound);

const port=3000 || process.env.PORT

const startserver=async()=>{
    try {
        await connectdb(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`app listening on port http://localhost:${port}/`);
        })
    } catch (error) {
        console.log(error);        
    }
}
startserver()