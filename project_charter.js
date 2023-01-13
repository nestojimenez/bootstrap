let clickedId = sessionStorage.getItem('idProjectCharter');
let initInvestment = sessionStorage.getItem('projectInitInvestmentCharter');
//alert(`My Project Is : ${clickedId}`);

const projectCost = document.getElementById('project_cost');
const onGoingCost = document.getElementById('ongoing_cost');
const projectSavings = document.getElementById('project_savings');
const yearlyBalance = document.getElementById('yearly_balance');
const payback = document.getElementById('payback');
const projectName = document.getElementById('project_name');
const projectDescription = document.getElementById('pr_description');
const driverSafety = document.getElementById('dri_safety');
const driverQuality = document.getElementById('dri_quality');
const driverCapacity = document.getElementById('dri_capacity');
const driverRequirement = document.getElementById('dri_req');

//Define progress bars
const understandStart = document.getElementById('understand_start');
const understandDuration = document.getElementById('understand_duration');
const assestmentStart = document.getElementById('assestment_start');
const assestmentDuration = document.getElementById('assestment_duration');
const designStart = document.getElementById('design_start');
const designDuration = document.getElementById('design_duration');
const planStart = document.getElementById('plan_start');
const planDuration = document.getElementById('plan_duration');
const executeStart = document.getElementById('execute_start');
const executeDuration = document.getElementById('execute_duration');
const transitionStart = document.getElementById('transition_start');
const transitionDuration = document.getElementById('transition_duration');
const supportStart = document.getElementById('support_start');
const supportDuration = document.getElementById('support_duration');

//Define Timeline Start, Middle an Finish Dates
const startDate = document.getElementById('date_start');
const finishDate = document.getElementById('date_finish');

const ip = '10.105.169.39';

/////Get Project By Id/////////////////////////////////////////////////
const getProjectById = async(id)=>{
    const result = await fetch("http://" + ip + ":3000/project/getProjectById/" + id, {method:"GET"});
    const rows = await result.json();
    console.log(rows);
    
    loadGeneralData(rows);
    loadMainData(rows);
    loadAutomationDriver(rows);

}

const getProjectPhaseDates = async(id) =>{
    const resultPhases = await fetch("http://" + ip + ":3000/phaseDate/getPhaseByProjectId/" + id, {method:"GET"});
    const rowsPhases = await resultPhases.json(); 
    console.log(rowsPhases);
    timeLine(rowsPhases);
}

const getExpensesByProyectId = async (clickedId) => {
    const resultPhases = await fetch("http://" + ip + ":3000/expenses/getExpensesById/" + clickedId, {method:"GET"});
    const result = await resultPhases.json()
    console.log(result);
    calculateTotalExpenses(result);
}
/////Calculate project expenses and filed required data on page
const calculateTotalExpenses = (results) =>{
    let totalExpenses = 0.0;
    results.forEach(element =>{
        totalExpenses += Number(element.amount)
    })
    document.getElementById('pr_expenses').textContent = '$ ' + totalExpenses;
    document.getElementById('pr_budget').textContent = '$ ' + initInvestment;
    document.getElementById('pr_remaining').textContent = '$ ' + (Number(initInvestment) - Number(totalExpenses));

    /*if((Number(initInvestment) - Number(totalExpenses)) < 0){
        document.getElementById('amount_remaining').style.backgroundColor = "red";
    }else{
        document.getElementById('amount_remaining').style.backgroundColor = "white";
    }*/
}
///Load Main Data
const loadMainData = (rows)=>{
    rows.forEach(element =>{
        projectName.textContent = element.pr_name;
        projectDescription.textContent = element.pr_description;
    })
}
//Load Project General Data
const loadGeneralData = (rows)=>{
    rows.forEach(element =>{
        //Project Cost
        const cost = Number(element.init_invest) + Number(element.nre_hours);
        console.log(cost);
        projectCost.textContent = `$ ${cost}`;
        //On Goin Cost
        const ongoing = Number(element.ongo_headcount) + Number(element.ongo_scrap) + Number(element.ongo_spareparts) + Number(element.ongo_overhead);
        console.log(ongoing);
        onGoingCost.textContent = `$ ${ongoing}`;
        //Project Savings
        const savings = Number(element.savings_headcount) + Number(element.savings_scrap) + Number(element.savings_costavoidance);
        console.log(savings);
        projectSavings.textContent = `$ ${savings}`;
        //Yearly Balance
        const yearly = savings - ongoing;
        console.log(yearly);
        yearlyBalance.textContent = `$ ${yearly}`;
        //Payback
        const pay = ((cost * 12)/(savings - ongoing)).toFixed(2);
        payback.textContent = `${pay} months`
        

    })

    //projectResume();
    
}
//Load Project Driver Information
const loadAutomationDriver = (rows =>{
    
    rows.forEach(element =>{
        if(element.dri_safety==='No Impact'){
            driverSafety.style.width = '10%';
        }else if(element.dri_safety==='Some Impact'){
            driverSafety.style.width = '50%';
        }else{
            driverSafety.style.width = '100%';
        }

        if(element.dri_quality==='No Impact'){
            driverQuality.style.width = '10%';
        }else if(element.dri_quality==='Some Impact'){
            driverQuality.style.width = '50%';
        }else{
            driverQuality.style.width = '100%';
        }

        if(element.dri_capacity==='No Impact'){
            driverCapacity.style.width = '10%';
        }else if(element.dri_capacity==='Some Impact'){
            driverCapacity.style.width = '50%';
        }else{
            driverCapacity.style.width = '100%';
        }

        if(element.dri_customerreq==='No Impact'){
            driverRequirement.style.width = '10%';
        }else if(element.dri_customerreq==='Some Impact'){
            driverRequirement.style.width = '50%';
        }else{
            driverRequirement.style.width = '100%';
        }
    })
})

//Load Time Line Information

const timeLine = (rows) =>{
    let daysUnderstand=0;
    let daysAssesment = 0;
    let daysPlan = 0;
    let daysDesign = 0;
    let daysExecute = 0;
    let daysTransition = 0;
    let daysSupport = 0;
    let daysProject = 0;
    let sToStartUnderstand = 0;
    let sToStartAssestment = 0;
    let sToStartPlan = 0;
    let sToStartDesign = 0;
    let sToStartExecute = 0;
    let sToStartTransition = 0;
    let sToStartSupport = 0;

    let daysUnderstandPer=0;
    let daysAssesmentPer = 0;
    let daysPlanPer = 0;
    let daysDesignPer = 0;
    let daysExecutePer = 0;
    let daysTransitionPer = 0;
    let daysSupportPer = 0;
    let daysProjectPer = 0;
    let sToStartUnderstandPer = 0;
    let sToStartAssestmentPer = 0;
    let sToStartPlanPer = 0;
    let sToStartDesignPer = 0;
    let sToStartExecutePer = 0;
    let sToStartTransitionPer = 0;
    let sToStartSupportPer = 0;

    rows.forEach(element =>{
        
        //Project each Phase Duration in Dates + Complete Project Duration in days
        daysUnderstand = calculateDaysBetweenDates(element.understand_start_date, element.understand_finish_date);
        console.log('Days Understand ' + daysUnderstand);
        daysAssesment = calculateDaysBetweenDates(element.assestment_start_date, element.assestment_finish_date);
        console.log('Days Assestment ' + daysAssesment);
        daysPlan = calculateDaysBetweenDates(element.plan_start_date, element.plan_finish_date);
        console.log('Days Plan ' + daysPlan);
        daysDesign= calculateDaysBetweenDates(element.design_start_date, element.design_finish_date);
        console.log('Days Design ' + daysDesign);
        daysExecute = calculateDaysBetweenDates(element.execute_start_date, element.execute_finish_date);
        console.log('Days Execute ' + daysExecute);
        daysTransition = calculateDaysBetweenDates(element.transition_start_date, element.transition_finish_date);
        console.log('Days Transition ' + daysTransition);
        daysSupport = calculateDaysBetweenDates(element.support_start_date, element.support_finish_date);
        console.log('Days Support ' + daysSupport);
        daysProject = calculateDaysBetweenDates(element.understand_start_date, element.support_finish_date);
        console.log('Days Project ' +daysProject);

        //Amount of days between Project Start and the Start of Each Phase, obviusly the days between Project Start and Understan Start are equal 0.
        sToStartUnderstand = 0;
        console.log('Start Days Understand ' + sToStartUnderstand);
        sToStartAssestment = calculateDaysBetweenDates(element.understand_start_date, element.assestment_start_date);
        console.log('Start Days Assestment ' + sToStartAssestment);
        sToStartPlan = calculateDaysBetweenDates(element.understand_start_date, element.plan_start_date);
        console.log('Start Days Plan ' + sToStartPlan);
        sToStartDesign = calculateDaysBetweenDates(element.understand_start_date, element.design_start_date);
        console.log('Start Days Design ' + sToStartDesign);
        sToStartExecute = calculateDaysBetweenDates(element.understand_start_date, element.execute_start_date);
        console.log('Start Days execute ' + sToStartExecute);
        sToStartTransition = calculateDaysBetweenDates(element.understand_start_date, element.transition_start_date);
        console.log('Start Days Transition ' + sToStartTransition);
        sToStartSupport= calculateDaysBetweenDates(element.understand_start_date, element.support_start_date);
        console.log('Start Days Support ' + sToStartSupport);

        //Calculate project duration and project start to start for each phase, but in %
        daysUnderstandPer = (daysUnderstand / daysProject) * 100;
        daysAssesmentPer = (daysAssesment / daysProject) * 100;
        daysPlanPer = (daysPlan / daysProject) * 100;
        daysDesignPer = (daysDesign / daysProject) * 100;
        daysExecutePer = (daysExecute / daysProject) * 100;
        daysTransitionPer = (daysTransition / daysProject) * 100;
        daysSupportPer = (daysSupport / daysProject) * 100;
        sToStartUnderstandPer= 0;
        sToStartAssestmentPer = (sToStartAssestment / daysProject) * 100;
        sToStartPlanPer = (sToStartPlan / daysProject) * 100;
        sToStartDesignPer = (sToStartDesign / daysProject) * 100;
        sToStartExecutePer = (sToStartExecute / daysProject) * 100;
        sToStartTransitionPer = (sToStartTransition / daysProject) * 100;
        sToStartSupportPer = (sToStartSupport / daysProject) * 100;

        //Fill progress bars
        understandStart.style.width = `0%`;
        understandDuration.style.width = `${daysUnderstandPer}%`;
        assestmentStart.style.width = `${sToStartAssestmentPer}%`;
        assestmentDuration.style.width = `${daysAssesmentPer}%`;
        planStart.style.width = `${sToStartPlanPer}%`;
        planDuration.style.width = `${daysPlanPer}%`;
        designStart.style.width = `${sToStartDesignPer}%`;
        designDuration.style.width = `${daysDesignPer}%`;
        executeStart.style.width = `${sToStartExecutePer}%`;
        executeDuration.style.width = `${daysExecutePer}%`;
        transitionStart.style.width = `${sToStartTransitionPer}%`;
        transitionDuration.style.width = `${daysTransitionPer}%`;
        supportStart.style.width = `${sToStartSupportPer}%`;
        supportDuration.style.width = `${daysSupportPer}%`;
        startDate.textContent = element.understand_start_date.slice(0,10);
    })
    
}

const calculateDaysBetweenDates = (dateStartx, dateFinishx) =>{
    
    const dateStart = new Date(dateStartx);
    const dateFinish = new Date(dateFinishx);

    let difference = dateFinish.getTime() - dateStart.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;


}

const calculateTotalMonthsDifference = (firstDatex, secondDatex) => {
    const firstDate = new Date(firstDatex);
    const secondDate = new Date(secondDatex);

    var fm = firstDate.getMonth();
    var fy = firstDate.getFullYear();
    var sm = secondDate.getMonth();
    var sy = secondDate.getFullYear();
    var months = Math.abs(((fy - sy) * 12) + fm - sm);
    var firstBefore = firstDate > secondDate;
    firstDate.setFullYear(sy);
    firstDate.setMonth(sm);
    firstBefore ? firstDate < secondDate ? months-- : "" : secondDate < firstDate ? months-- : "";
    //console.log(fm, fy, sm, sy);
    return months;
}

getProjectById(clickedId);
getExpensesByProyectId(clickedId);
getProjectPhaseDates(clickedId);