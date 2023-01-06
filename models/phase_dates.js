const client = require('../config');

PhaseDates = {};

PhaseDates.createPhaseDates = async (phaseDates) =>{
    try{
        const sql = `INSERT INTO projectPhaseDates(
            pr_id,
            understand_start_date,
            understand_finish_date,
            assestment_start_date,
            assestment_finish_date,
            plan_start_date,
            plan_finish_date,
            design_start_date,
            design_finish_date,
            execute_start_date,
            execute_finish_date,
            transition_start_date,
            transition_finish_date,
            support_start_date,
            support_finish_date,
            created_at,
            updated_at
        ) 
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)`
        await client.query(sql, 
        [
            phaseDates.pr_id,
            phaseDates.understand_start_date,
            phaseDates.understand_finish_date,
            phaseDates.assestment_start_date,
            phaseDates.assestment_finish_date,
            phaseDates.plan_start_date,
            phaseDates.plan_finish_date,
            phaseDates.design_start_date,
            phaseDates.design_finish_date,
            phaseDates.execute_start_date,
            phaseDates.execute_finish_date,
            phaseDates.transition_start_date,
            phaseDates.transition_finish_date,
            phaseDates.support_start_date,
            phaseDates.support_finish_date,
            new Date(),
            new Date()
        ]);
        return true;
    }
    catch(e){
        
        console.log(e);
        return false;
    }
}

PhaseDates.getDatesByProjectId = async (pr_id) =>{
    try{
        const results = await client.query(`SELECT * FROM projectphasedates WHERE pr_id = $1`, [pr_id]);
        return results.rows;
    }
    catch(e)
    {
        console.log(`Something wrong happend ${e}`);
        return [];
    }
}

module.exports = PhaseDates;