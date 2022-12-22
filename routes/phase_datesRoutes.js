const phase_datesController = require('../controllers/phase_datesController');




module.exports =(app)=> {
    app.post("/phaseDate/create", phase_datesController.createPhaseDates);
}