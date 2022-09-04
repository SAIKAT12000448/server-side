const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port||3000;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');



app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qp5s8.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

console.log(uri);
async function run(){
    try{
        await client.connect()
        const database = client.db("meeeting-scedule");
        const contentCollection = database.collection("meetinglist");




      app.post("/metpost",async(req,res)=>{
         console.log(res);
      })

        app.get("/meets", async(req,res)=>{

        })

    }

    finally{

    }
}
run().catch(console.dir);






app.get('/',(req,res)=>{
    res.send("hello world");

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  