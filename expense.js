const express = require('express');

const router = express.Router();

const userController = require('../controller/expense');


router.post('/add-expense',userController.postAddExpense);

router.get('/all-expense',userController.getExpense)

router.delete('/delete-expense/:id',userController.deleteExpense);


module.exports=router;