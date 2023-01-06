let clickedId = sessionStorage.getItem('idProjectCharter');
//alert(`My Project Is : ${clickedId}`);

const projectCost = document.getElementById('project_cost');
const onGoingCost = document.getElementById('ongoing_cost');
const projectSavings = document.getElementById('project_savings');
const yearlyBalance = document.getElementById('yearly_balance');
const payback = document.getElementById('payback');
const projectName = document.getElementById('project_name');
const driverSafety = document.getElementById('dri_safety');
const driverQuality = document.getElementById('dri_quality');
const driverCapacity = document.getElementById('dri_capacity');
const driverRequirement = document.getElementById('dri_req');

/////Get Project By Id/////////////////////////////////////////////////
const getProjectById = async(id)=>{
    const result = await fetch("http://10.105.169.30:3000/project/getProjectById/" + id, {method:"GET"});
    const rows = await result.json();
    console.log(rows);
    
    loadGeneralData(rows);
    loadMainData(rows);
    loadAutomationDriver(rows);

}

const getProjectPhaseDates = async(id) =>{
    const resultPhases = await fetch("http://10.105.169.30:3000/phaseDate/getPhaseByProjectId/" + id, {method:"GET"});
    const rowsPhases = await resultPhases.json(); 
    console.log(rowsPhases);
    timeLine(rowsPhases);
}

///Load Main Data
const loadMainData = (rows)=>{
    rows.forEach(element =>{
        projectName.textContent = element.pr_name;
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
        //OnGoingCost
        /*//Load Proejct Data
        projectName.value = element.pr_name;
        customerName.value = element.cu_name;
        projectOwner.value = element.pr_owner;
        email.value = element.email;
        initialInvestment.value = element.init_invest;
        nreHours.value = element.nre_hours;
        //Load ongoin cost
        headCountOnGoinCost.value = element.ongo_headcount;
        scrapOnGoin.value = element.ongo_scrap;
        sparePartsOnGoinCost.value = element.ongo_spareparts;
        overHeadOnGoing.value = element.ongo_overhead;
        //Load Savings
        headCountSavings.value = element.savings_headcount;
        scrapSavings.value = element.savings_scrap;
        costAvoidanceSavings.value = element.savings_costavoidance;
        //Load Automation Driver
        driverSafety.value = element.dri_safety;
        driverQuality.value = element.dri_quality;
        driverCapacity.value = element.dri_capacity;
        driverCustomerRequirement.value = element.dri_customerreq;
        capexPO.checked = element.capex_po;
        aware.checked = element.aware;
        //Load Project Initial Status
        switch(element.pr_status){
            case 'concept':
                radConcept.checked = true;
                break;
            case 'in_progress':
                radInProgress.checked = true;
                break;
            case 'on_hold':
                radOnHold.checked = true;
                break;
            default:
                radConcept.checked = true;
        }
        prStartDate.value = element.pr_start_date.slice(0,10);
        prFinishDate.value = element.pr_finish_date.slice(0,10);*/

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
    let daysExecute = 0;
    let daysTransition = 0;
    let daysSupport = 0;
    let daysProject = 0;
    let sToStartUnderstand = 0;
    let sToStartAssestment = 0;
    let sToStartExecute = 0;
    let sToStartTransition = 0;
    let sToStartSupport = 0;

    let daysUnderstandPer=0;
    let daysAssesmentPer = 0;
    let daysExecutePer = 0;
    let daysTransitionPer = 0;
    let daysSupportPer = 0;
    let daysProjectPer = 0;
    let sToStartUnderstandPer = 0;
    let sToStartAssestmentPer = 0;
    let sToStartExecutePer = 0;
    let sToStartTransitionPer = 0;
    let sToStartSupportPer = 0;

    rows.forEach(element =>{
        
        //Project each Phase Duration in Dates + Complete Project Duration in days
        daysUnderstand = calculateDaysBetweenDates(element.understand_start_date, element.understand_finish_date);
        console.log(daysUnderstand);
        daysAssesment = calculateDaysBetweenDates(element.assestment_start_date, element.assestment_finish_date);
        console.log(daysAssesment);
        daysExecute = calculateDaysBetweenDates(element.execute_start_date, element.execute_finish_date);
        console.log(daysExecute);
        daysTransition = calculateDaysBetweenDates(element.transition_start_date, element.transition_finish_date);
        console.log(daysTransition);
        daysSupport = calculateDaysBetweenDates(element.support_start_date, element.support_finish_date);
        console.log(daysSupport);
        daysProject = calculateDaysBetweenDates(element.understand_start_date, element.support_finish_date);
        console.log(daysProject);

        //Amount of days between Project Start and the Start of Each Phase, obviusly the days between Project Start and Understan Start are equal 0.
        sToStartUnderstand = 0;
        sToStartAssestment = calculateDaysBetweenDates(element.understand_start_date, element.assestment_start_date);
        sToStartExecute = calculateDaysBetweenDates(element.understand_start_date, element.execute_start_date);
        sToStartTransition = calculateDaysBetweenDates(element.understand_start_date, element.transition_start_date);
        sToStartSupport= calculateDaysBetweenDates(element.understand_start_date, element.support_start_date);
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
getProjectPhaseDates(clickedId);