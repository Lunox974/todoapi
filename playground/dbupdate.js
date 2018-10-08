const {MongoClient, ObjectId} = require ('mongodb'); 
MongoClient.connect("mongodb://localhost:27017/todoapi",(err, client) => {
    if (err) {
        return console.log(err);
    }
console.log('connected');
const db = client.db('todoapi');
db.collection('Todos').updateOne(
    {_id: new ObjectId("5bbb190ae185842990ae281a")},
    {$set:{
        completed:false
    }
    }).then((docs) =>{
    console.log(JSON.stringify(docs, undefined, 2));
}).catch((err) => {
    console.log(err);
})
client.close();
});