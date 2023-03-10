const mongoose = require("mongoose")

const goalSchema = mongoose.Schema(
    {
        user : {                                   // To map users associated with goal
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
       text: {
        type: String,
        required: [true, 'Please add your goal']
    }
}, {
    timestamps : true
})

module.exports = mongoose.model('Goal', goalSchema)