import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Conectado ao MongoDB com sucesso!");
	} catch (error) {
		console.error("Erro ao conectar ao MongoDB:", error);
		process.exit(1);
	}
};

export default connectDB;