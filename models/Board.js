const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    columns: [
        {
            name: String,
            tasks: {
                type: [
                    {
                        title: String,
                        description: String,
                        status: String,
                        subtasks: {
                            type: [
                                {
                                    title: String,
                                    isCompleted: Boolean
                                }
                            ],
                            required: false
                        }
                    }
                ],
                required: false
            }
        }
    ]
})

module.exports = mongoose.model("Boards", boardSchema, "boards")