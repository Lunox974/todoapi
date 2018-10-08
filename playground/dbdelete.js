const {MongoClient, ObjectId} = require ('mongodb'); 
MongoClient.connect("mongodb://localhost:27017/todoapi",(err, client) => {
    if (err) {
        return console.log(err);
    }
console.log('connected');
const db = client.db('todoapi');
db.collection('Todos').deleteOne({_id: new ObjectId("5bbb18f30ca25c1d703da24f")}).then((docs) =>{
    console.log(JSON.stringify(docs, undefined, 2));
}).catch((err) => {
    console.log(err);
})
client.close();
});