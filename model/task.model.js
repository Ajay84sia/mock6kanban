const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String,  enum: ['Todo', 'Doing', 'Done'], default: 'Todo' },
    subtask : { type: Array, required: true },
}, {
    versionKey: false,
})

const TaskModel = mongoose.model('task', taskSchema)

module.exports = {
    TaskModel
}