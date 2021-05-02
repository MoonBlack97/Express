require("./DB")

module.exports = class Mongo extends DB{

    constructor(){

    }

    conexion(){
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://test:<password>@cluster0.k8dhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
          const collection = client.db("test").collection("devices");
          // perform actions on the collection object
          client.close();
        });
    }

}