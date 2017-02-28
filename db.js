module.exports = function() {

    var host = 'localhost',
        port = 27017,
        library_db = 'library';

    var mongo = require('mongodb');

    var Server = mongo.Server,
        Db = mongo.Db;
    return {
        openDB : function(){
            var database = new Db(library_db, new Server(host, port));
            return new Promise(function(resolve, reject){
                return database.open(function(err, database){
                    if(!err){
                        resolve(database);
                    }
                    else{
                        reject(err);
                    }
                });
            });
        }
    }
}()







