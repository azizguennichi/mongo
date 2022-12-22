const MongoClient = require('mongodb').MongoClient
var url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url,function(err,db){
    if(err) throw err
    var dbmy = db.db('mydbfirst')
    var mydata = {name:'Aziz Guennichi',age:20}
    var manydata = ([{name:'Safa Hamrouni',age:30}, {name:"Nesrine Cherif" ,age:23}, {name:"dali",age:30}, {name:"Mohamed", age:25}])

    // dbmy.collection('AzizUsers').insertOne(mydata,function(err,res){
    //     if (err) throw err
    //     console.log('Document inserted')
    //     db.close()
    // })

//     dbmy.collection('AzizUsers').insertMany(manydata,function(err,res){
//     if (err) throw err
//     console.log('Document inserted')
//     db.close()
// })





//    dbmy.collection('AzizUsers').deleteOne({name:"Nesrine Cherif"})
//    console.log('deleted')

   


// dbmy.collection('AzizUsers').deleteMany({name:"Mohamed"})
//    console.log('deleted')







//    dbmy.collection('AzizUsers').updateOne({name:"dali"}, {$set:{name:"radhi"}})
//    console.log('updated')
   
//    dbmy.collection('AzizUsers').updateMany({name:"radhi"}, {$set:{name:"firas",age:19}})
//    console.log('updated')
   
  
})





