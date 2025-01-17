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
 *         - exercise_type
 *         - Duration
 *         - Kilometers
 *         - exercise_date
 *         - user_id
 *       properties:
 *         exercise_type:
 *           type: number
 *           description: Tipo do exercídio
 *         Duration:
 *           type: number
 *           description: Duração da atividade
 *         Kilometers:
 *           type: number
 *           description: Quilometros percorridos
 *         exercise_date:
 *           type: string
 *           format: date
 *           description: Data do exercício (YYYY-MM-DD)
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
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do exercício
 *     responses:
 *       200:
 *         description: Exercício
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Exercises'
 *       404:
 *         description: Exercício não encontrado
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
 * /exercises/{id}:
 *   put:
 *     summary: Atualiza um exercício
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do exercício
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exercises'
 *     responses:
 *       200:
 *         description: Exercício atualizado com sucesso
 *       404:
 *         description: Erro na atualizacao do exercício
 *       500:
 *         description: Erro ao atualizar o exercício
 */
router.put("/:id", exercicesController.update);

/**
 * @swagger
 * /exercises/{id}:
 *   delete:
 *     summary: Remove um exercício
 *     tags: [Exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do exercício
 *     responses:
 *       200:
 *         description: Exercício removido com sucesso
 *       404:
 *         description: Erro ao deletar o exercício
 *       500:
 *         description: Erro ao deletar o exercício
 */
router.delete("/:id", exercicesController.delete);

export default router;
