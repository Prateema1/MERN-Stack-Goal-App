//@desc  Get goals
//@route GET /api/goals
//@access Private

const getGoals = async (req, res) => {
    res.status(200).json({message: "Get Goals"});
}

//@desc  SET goals
//@route POST /api/goals
//@access Private

const setGoals = async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        //Using built-in express error handler
        throw new Error('Please add a text field value')
    }
    res.status(200).json({message: "Set Goals"});
}

//@desc  Update goals
//@route PUT /api/goals/:id
//@access Private

const updateGoals = async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});
}

//@desc  Delete goals
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = async (req, res) => {
    res.status(200).json({message: `Delete goal for ${req.params.id}`});
}


module.exports = {
    getGoals, setGoals, updateGoals, deleteGoals
}