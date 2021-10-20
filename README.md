# node-express-open-api-skeleton
A Node Express skeleton that comes with openapi/swagger already configured including routing with the help of the `swagger-routes-express` npm package.

# Installation
- Clone the project by running from your command line git clone https://github.com/ReubenFrimpong/node-express-open-api-skeleton.git
- Navigate to the folder where you cloned the project and run `npm install`

# Running The App
 - Use `npm run start` to start your server
 - Access the Swagger UI from `http://localhost:3000/api-docs/`
 - Access the defualt endpoint by making a GET request to `http://localhost:3000/v1/users` from Postman or any API testing tool of your choice.

# Routing
- First add the name of the function you want to use as the value for operationId in your paths section of your OpenAPI file. [`Example here`](https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/docs/paths/users.yaml)
- Add the controller file inside `./api/controllers`
- Define the function and export it [`Example here`](https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/api/controllers/users-controller.js)
- Inside `./api/index.js` import the function you just added in the previous step and add it to the export list [`Example here`](https://github.com/ReubenFrimpong/node-express-open-api-skeleton/blob/main/api/index.js)

# More Info
For more details into this project checkout my article [`here`](https://reubenfrimpong.me/routing-an-openapi-application-with-node-express-and-swagger).
