const phaseDates = require('../models/phase_dates');

module.exports = {
    async createPhaseDates(req, res, next){
        let result = {}
        try{
            const reqJson = req.body;
            await phaseDates.createPhaseDates(reqJson);
            result.success = true;
            
        
        }catch(e){
            result.success = false;
        }
    },

    async getPhaseDateByProjectId(req, res, next) {
        const pr_id = req.params.pr_id;
        const rows = await phaseDates.getDatesByProjectId(pr_id);
        res.setHeader("content-type", "application/json");
        res.send(JSON.stringify(rows));
    }
}