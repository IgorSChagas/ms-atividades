import express from "express";
import exercisesRoutes from "./exercisesRotes.js";

const router = express.Router();

// Rota principal de usuários
router.use("/exercises", exercisesRoutes);

// Adicione outras rotas aqui, se necessário
// router.use("/outro-modelo", outroModeloRoutes);

export default router;
