import "dotenv/config";
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import connectDB from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Conexão com o banco
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Configuração Swagger
const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Minha API com Swagger",
			version: "1.0.0",
			description: "Exemplo de API com Express, Mongoose e Swagger",
		},
		servers: [
			{
				url: `http://localhost:${PORT}/api`,
			},
		],
	},
	apis: ["./src/routes/*.js"], // Caminho para as definições Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use("/api", routes);

// Inicialização do servidor
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
	console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
