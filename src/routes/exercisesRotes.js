import express from "express";
import exercicesController from "../controllers/exercicesController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Exercises:
 *       type: object
 *       required:
 *         - exercice_type
 *         - duration
 *         - kilometers
 *         - exercice_date
 *         - user_id
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         exercice_type:
 *           type: number
 *           description: Tipo do exercídio
 *         duration:
 *           type: number
 *           description: Duração da atividade
 *         kilometers:
 *           type: number
 *           description: Quilometros percorridos
 *         exercice_date:
 *           type: date
 *           description: Data da atividade
 *         user_id:
 *           type: string
 *           description: Id do Usuário vinculado
 *
 */

/**
 * @swagger
 * /exercises:
 *   get:
 *     summary: Retorna a lista de exercícios realizados
 *     tags: [Exercises]
 *     responses:
 *       200:
 *         description: Lista de exercícios realizados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Exercises'
 */
router.get("/", exercicesController.list);

/**
 * @swagger
 * /exercises/{id}:
 *   get:
 *     summary: Retorna um exercício específico
 *     tags: [Exercises]
 *     responses:
 *       200:
 *         description: Exercício
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Exercises'
 */
router.get("/:id", exercicesController.find);

/**
 * @swagger
 * /exercises:
 *   post:
 *     summary: Cria um novo exercício
 *     tags: [Exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exercises'
 *     responses:
 *       201:
 *         description: Exercício criado com sucesso
 *       400:
 *         description: Erro na criação do exercício
 */
router.post("/", exercicesController.create);

/**
 * @swagger
 * /exercises:
 *   put:
 *     summary: Atualiza um exercício
 *     tags: [Exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exercises'
 *     responses:
 *       201:
 *         description: Exercício atualizado com sucesso
 *       400:
 *         description: Erro na atualizacao do exercício
 */
router.put("/id", exercicesController.update);

/**
 * @swagger
 * /exercises:
 *   delete:
 *     summary: Remove um exercício
 *     tags: [Exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exercises'
 *     responses:
 *       201:
 *         description: Exercício criado com sucesso
 *       400:
 *         description: Erro na criação do exercício
 */
router.delete("/:id", exercicesController.delete);

export default router;
