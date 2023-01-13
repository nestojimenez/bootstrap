const expensesController = require('../controllers/expensesController');




module.exports =(app)=> {
    app.post("/expenses/create", expensesController.createExpenses);
    app.get('/expenses/getExpensesById/:id', expensesController.getExpensesById);
    
}