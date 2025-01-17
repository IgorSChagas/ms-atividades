import mongoose from "mongoose";

const exercicesSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		exercise_type: { type: String, required: true },
		Duration: { type: Number },
		Kilometers: { type: Number },
		exercise_date: { type: Date },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ versionKey: false }
);

const Exercise = mongoose.model("atividades", exercicesSchema);

export default Exercise;
