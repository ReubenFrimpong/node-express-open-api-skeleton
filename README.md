# node-express-open-api-skeleton
A Node Express skeleton that comes with openapi/swagger already configured including routing.

# Installation
- Clone the project by running from your command line git clone https://github.com/ReubenFrimpong/node-express-open-api-skeleton.git
- Navigate to the folder where you cloned the project and run `npm install`

# Routing
- First add the name of the function you want to use as the value for operationId in your paths section of your OpenAPI file (example https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/docs/paths/users.yaml)
- Add the controller file inside `./api/controllers`
- Define the function and export it (example https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/api/controllers/users-controller.js)
- Inside `./api/index.js` import the function you just added in the previous step and add it to the export list (example https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/api/index.js)

# More Info
For more details into this project checkout my article here.
