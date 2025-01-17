import Exercise from "../models/exercises.js";

class ExerciceController {
	static async list(req, res) {
		try {
			const exercises = await Exercise.find({});
			res.status(200).json(exercises);
		} catch (erro) {
			res
				.status(500)
				.json({ message: `${erro.message} - falha na requisição` });
		}
	}

	static async find(req, res) {
		try {
			const id = req.params.id;
			const Exercise = await Exercise.findById(id);
			res.status(200).json(Exercise);
		} catch (erro) {
			res
				.status(500)
				.json({ message: `${erro.message} - usuario não encontrado` });
		}
	}

	static async create(req, res) {
		try {
			const Exercise = await Exercise.create(req.body);
			res
				.status(201)
				.json({ message: "usuario criado com sucesso", Exercise: Exercise });
		} catch (erro) {
			res
				.status(500)
				.json({ message: `${erro.message} - falha ao cadastrar usuario` });
		}
	}

	static async update(req, res) {
		try {
			const id = req.params.id;
			await Exercise.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: "Exercicio atualizado!" });
		} catch (erro) {
			res
				.status(500)
				.json({ message: `${erro.message} - falha na atualização` });
		}
	}

	static async delete(req, res) {
		try {
			const id = req.params.id;
			await Exercise.findByIdAndDelete(id);
			res.status(200).json({ message: "Exercicio excluido!" });
		} catch (erro) {
			res.status(500).json({ message: `${erro.message} - falha ao excluir` });
		}
	}
}

export default ExerciceController;
