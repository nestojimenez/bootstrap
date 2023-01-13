const client = require('../config');

Expenses = {};

Expenses.createExpenses = async (expenses) =>{
    try{
        const sql = `INSERT INTO expenses(
            pr_id,
            po_number,
            amount,
            expense_type,
            created_at,
            updated_at
        ) 
        VALUES($1, $2, $3, $4, $5, $6)`
        await client.query(sql, 
        [
            expenses.pr_id,
            expenses.po_number,
            expenses.amount,
            expenses.expense_type,
            new Date(),
            new Date()
        ]);
        console.log('success');
        return true;
    }
    catch(e){
        
        console.log(e);
        return false;
    }
}

Expenses.getExpensesById = async (id) =>{
    try{
        const results = await client.query(`SELECT * FROM expenses WHERE pr_id = $1`, [id]);
        return results.rows;
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}


module.exports = Expenses;