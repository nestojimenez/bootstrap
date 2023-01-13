const expenses = require('../models/expenses');

module.exports = {
    async createExpenses(req, res, next){
        let result = {}
        try{
            const reqJson = req.body;
            await expenses.createExpenses(reqJson);
            result.success = true;
            
        
        }catch(e){
            result.success = false;
        }
    },

    async getExpensesById(req, res, next) {
        const id = req.params.id;
        const rows = await expenses.getExpensesById(id);
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(rows));
    }
}