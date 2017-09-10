# nodeaddressapi
RESTful API using Node.js

Implements adding, retrieving, updating and deleting an address.

## Requires 
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

## Endpoints
The endpoints are defined in *[addressapiRoutes.js](https://github.com/iggym/nodeaddressapi/blob/master/api/routes/addressapiRoutes.js)*

* **GET /addresses :**   gets all addresses stored in the database
* **POST /addresses :**  adds an address
* **GET /addresses/{addressId} :**  gets an address by id
* **PUT /addresses/{addressId} :**  updates an address by id
* **GET /addresses/{addressId} :**  deletes an address by id


```
'use strict';
module.exports = function(app) {
  var addressapi = require('../controllers/addressapiController');

  // address Routes
  app.route('/addresses')
    .get(addressapi.list_all_address)
    .post(addressapi.create_an_address);


  app.route('/addresses/:addressId')
    .get(addressapi.read_an_address)
    .put(addressapi.update_an_address)
    .delete(addressapi.delete_an_address);
};
```

## Start the server
```
npm run start
```
make sure mongod is running and there is a /data/db directory

## Database 
The data is stored in mongo. 

Note: *The api starts with an empty database.*

### Installing MongoDB with Homebrew
```
brew install mongodb
mkdir -p /data/db
```
### Set permissions for the data directory
Ensure that user account running mongod has correct permissions for the directory:
```
sudo chmod 0755 /data/db
sudo chown $USER /data/db
```
