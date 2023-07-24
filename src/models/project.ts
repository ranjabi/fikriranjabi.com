import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stack: {
    type: [String],
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  demoLink: {
    type: String,
    required: true,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
