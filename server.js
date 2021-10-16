const dotenv = require("dotenv");
const makeApp = require('./app');

dotenv.config({path: '.env'})
//do other things like connecting to your database here
const port = process.env.PORT || 3000;

makeApp()
  .then(app => {
    // use app to do other express related configs here
    app.listen(port)
  })
  .then(() => {
    console.log(`App running on port ${port}...`)
  })
  .catch(err => {
    console.error('Caught an error', err)
});
