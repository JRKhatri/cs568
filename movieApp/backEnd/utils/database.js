/**
 * @ author Jyoti R. Khatri
 * @ since Aug 10 2021
 */

//export two things 1)connection and 2) point to the database
const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017';

//connecting with the server of mongodb (where movieApp database have user and movie collections)

const mongoConnect = (callback) => {

    mongoose.connect(dbUrl, {
        useNewUrlparser : true,
        useUnifiedTopology : true,
        dbName : 'moviesDb'
    }).then(client => {
        console.log('Successfully connected to mongodb Server')
        callback();
    }).catch(error => {
        handelError(error)
    })
}

exports.mongoConnect = mongoConnect;