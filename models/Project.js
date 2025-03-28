import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    repo: {
        type: String,
    },
    tags: [String],
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema)