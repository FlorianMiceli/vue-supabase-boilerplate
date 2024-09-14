const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = 8080;
const FRONTEND_PORT = 5173;

// Middleware for json body parsing
app.use(express.json());

// Generate Swagger spec
const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Boilerplate API", //TODO: Change this to the name of the API
            version: "0.0.1",
        },
    },
    apis: ["./routes/*.js"],
});

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve Swagger JSON
app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
});

// Enable CORS
const origin = process.env.NODE_ENV === "production" ? "https://your-production-frontend-url.com" : "http://localhost:" + FRONTEND_PORT; //TODO: Change this to the production frontend URL
// restrict to only allow requests from the frontend
app.use(
    cors(
        //Access-Control-Allow-Headers
        {
            origin: origin,
            methods: "GET, POST, PUT, DELETE",
            allowedHeaders: "*",
        }
    )
);

// Routes
app.use("/test", require("./routes/test"));

// Run server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
