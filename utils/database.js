const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://sam:Bc5ncmvD2lW0uylD@cluster0-jikpr.mongodb.net/test?retryWrites=true&w=majority')
        .then(result => {
        console.log('connected')
        callback(client)
     })
        .catch(err => {
            console.log(err)
        })
}

module.exports = mongoConnect

