// Export an object and create a User property on it 
// Set the value of the User property to the imported User model from ./User.js
module.exports = {
  User: require('./User')
}