import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Torentify API",
      version: "1.0.0",
      description: "Auth, Blog & Jobs APIs",
    },
    servers: [
      {
        // url: "http://localhost:5000",
        url:"https://backend-torentify.onrender.com/"
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./server/routes/*.js"], // scans ALL route files
};

export default swaggerJSDoc(options);
