import mongoose from "mongoose";

const exercicesSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		exercice_type: { type: String, required: true },
		duration: { type: Number },
		kilometers: { type: Number },
		exercice_date: { type: Date },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ versionKey: false }
);

const Exercise = mongoose.model("Exercises", exercicesSchema);

export default Exercise;
