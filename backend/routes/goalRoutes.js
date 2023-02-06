const express = require("express");
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware');
// router.get('/', getGoals);
// router.post('/' , setGoals);
// Chaining same routes
router.route('/').get(protect, getGoals).post(protect, setGoals)

// router.put('/:id', updateGoals); 
// router.delete('/:id', deleteGoals);
//Chaining same routes
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)

module.exports = router;