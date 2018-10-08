//const mongoClient = require('mongodb').MongoClient;
const {MongoClient} = require ('mongodb'); 
// var User = {
//     name : "bob"
// };
//console.log(User.name);

//var {name} = User;

//console.log(name);

MongoClient.connect("mongodb://localhost:27017/todoapi",(err, client) => {
    if (err) {
        return console.log(err);
    }
console.log('connected');
const db = client.db('todoapi');
db.collection('Todos').insertOne({
    text: 'something to do',
    completed: true
},(err, result) => {
    if (err) {
        return console.log('unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops));
})
db.collection('User').insertOne({
    username: 'bob',
    password: 'toto'
}, (err, result) =>{
    if (err) {
        return console.log('unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops));
});
 client.close();
});