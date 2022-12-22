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
    }
}