var mongodb = require('./db');

module.exports = function(){
    return {
        getCollections : function(){
            return mongodb.openDB()
                .then(function(database){
//                    return new Promise(function(resolve, reject){
//                        collections = database.listCollections().toArray();
//                        if(collections)
//                            resolve(collections);
//                        else
//                            reject();
//                    }).then(function(collections){
//                        collectionsList = collections.map((collection) => collection.name);
//                        resultlist = collectionsList.map( (name) => database.collection(name).find().toArray());
//                        return resultlist;
//                    });

                    return database.collection('books').find().toArray();
                });
        },

        addBooks : function(newBooks){
            return mongodb.openDB()
                .then(function(database){
                    database.collection('books').insert(newBooks)
//                    for (var bookCollection in booksCollection){
////                        console.log(bookCollection,"TOTAL",booksCollection, "value", booksCollection[bookCollection]);
//                        var document = booksCollection[bookCollection];
//                        console.log(document);
//
//
//                        document = "{".concat(document).concat("}");
////                        document = JSON.parse(document);
//                        console.log(document);
////                       bookObject = JSON.parse(booksCollection[bookCollection]);
////                        database.collection(bookCollection).insert(bookObject);
//                    }


                });

        }
    }
}()