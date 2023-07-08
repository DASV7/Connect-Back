const path = require("path");

module.exports = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "3.0.0",
      title: "Connect back",
      description: "Service back-end for read endPoints",
      contact: {
        name: "Connect Documentation api",
        url: "",
        email: "dasvv7@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "first version server",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../") + "/routes/*.route.js"],
};
