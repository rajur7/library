var books = require('./books');

var _ = require('lodash');
module.exports = function(){

    return {
        getBooks : function(res){
            var promise = books.getCollections();
            promise.then(function(documents){
                var bookNames = documents.map(function(document){
                     return _.pick(document, 'name').name;
                });

                res.send(bookNames);
            })
        },

        addBooks : function(res, newBooks){
//            res.send(typeof booksCollection);
            var promise = books.addBooks(newBooks);

            var success = function(){
                res.send({"status" : "book(s) added successfully"});
            };
            var failure = function(){
                res.send({"status" : "book(s) not added"});
            };

            promise.then(success).catch(failure);
        }
    }
}()
