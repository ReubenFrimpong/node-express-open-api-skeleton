# node-express-open-api-skeleton
A Node Express skeleton that comes with openapi/swagger already configured including routing.

# Installation
Clone the project by running from your command line git clone https://github.com/ReubenFrimpong/node-express-open-api-skeleton.git
Navigate to the folder where you cloned the project and run `npm install`

# Routing
First add the name of the function you want to use as the value for operationId in your paths section
Add the controller inside `./api/controllers`
Define the function and export it.
Inside `./api/index.js` import the function you just added in the previous step and add it to the export list

# Example
There is a sample user-controller.js that illustrates how the routing should be done. For more details into this project checkout my blog here 
