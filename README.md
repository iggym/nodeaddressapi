# nodeaddressapi
RESTful API using Node.js

## Requires 
* Node.js
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

## Start the server
```
npm run start
```
make sure mongod is running and there is a /data/db directory


## Installing MongoDB with Homebrew
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
