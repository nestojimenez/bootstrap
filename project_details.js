const loadPhasesString = `<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <p class="h5">Phase 1 - Understand</p>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="understand_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="understand_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 2 - Assestment</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="assestment_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="assestment_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 3 - Plan</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="plan_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="plan_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 4 - Design</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="design_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="design_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 5 - Execute</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="execute_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="execute_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 6 - Transition</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="transition_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="transition_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>

<div class="row gy-3">

  <div class="col-md-4 align-self-center">
    <div class="h5">Phase 7 - Support</div>
  </div>

  <div class="col-md-4">
      <label for="cc-name" class="form-label">Start Date</label>
      <input type="date" class="form-control" id="support_start_date" placeholder="" required>
      <small class="text-muted">Provide estimated dates</small>
      <div class="invalid-feedback">
        Name on card is required
      </div>
  </div>

  <div class="col-md-4">
    <label for="cc-number" class="form-label">Finish Date</label>
    <input type="date" class="form-control" id="support_finish_date" placeholder="" required>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>   
</div>
</div>
`

//const clickedId = require('./view_projects');
let clickedId = sessionStorage.getItem('clicked_id');
console.log(clickedId);
document.getElementById('letrero').innerHTML = clickedId;

//let rows = [];  //Stores getProjectById response

const projectName = document.getElementById('project_name');
const customerName = document.getElementById('customer_name');
const projectOwner = document.getElementById('pr_owner');
const email = document.getElementById('email');
const initialInvestment = document.getElementById('initial_investment');
const nreHours = document.getElementById('nre_hours');

const headCountOnGoinCost = document.getElementById('head_count_ongoing');
const scrapOnGoin = document.getElementById('scrap_ongoing');
const sparePartsOnGoinCost = document.getElementById('spare_parts_ongoing');
const overHeadOnGoing = document.getElementById('overhead_ongoing');

const headCountSavings = document.getElementById('head_count_savings');
const scrapSavings = document.getElementById('scrap_savings');
const costAvoidanceSavings = document.getElementById('cost_avoidance_savings');

const driverSafety = document.getElementById('dri_safety');
const driverQuality = document.getElementById('dri_quality');
const driverCapacity = document.getElementById('dri_capacity')
const driverCustomerRequirement = document.getElementById('dri_customerreq');
const capexPO = document.getElementById('capex_po');
const aware = document.getElementById('aware');

const radConcept = document.getElementById('concept');
const radInProgress = document.getElementById('in_progress');
const radOnHold = document.getElementById('on_hold');
const radFinish = document.getElementById('finish');

const prStartDate = document.getElementById('pr_start_date');
const prFinishDate = document.getElementById('pr_finish_date');

const projectTotalCost = document.getElementById('project_total_cost');
const totalOnGoinCost = document.getElementById('total_ongoing_cost');
const projectdSavings = document.getElementById('total_savings');
const yearlyBalance = document.getElementById('yearly_balance');
const payBack = document.getElementById('pay_back');
const phasesDates = document.getElementById('phase_dates');

const btnOpenProjectcharter = document.getElementById('btn_goto_charter');


/////Get Project By Id/////////////////////////////////////////////////
const getProjectById = async(id)=>{
    const result = await fetch("http://10.105.169.30:3000/project/getProjectById/" + id, {method:"GET"});
    const rows = await result.json();
    console.log(rows);
    
    loadPrjectDetails(rows);

    if(radInProgress.checked){
        phasesDates.innerHTML = loadPhasesString;
        const resultPhases = await fetch("http://10.105.169.30:3000/phaseDate/getPhaseByProjectId/" + clickedId, {method:"GET"});
        const rowsPhases = await resultPhases.json(); 
        console.log(rowsPhases);
        loadPhaseDates(rowsPhases);
    }
    
}

//Load Project Details
const loadPrjectDetails = (rows)=>{
    rows.forEach(element =>{

        //Load Proejct Data
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
        prFinishDate.value = element.pr_finish_date.slice(0,10);

    })

    projectResume();
    
}

//Calculate Project Resume
const projectResume = ()=>{
    const totalCost = Number(initialInvestment.value)+Number(nreHours.value);
    const totalOngoinCost = Number(headCountOnGoinCost.value) + Number(scrapOnGoin.value) + Number(sparePartsOnGoinCost.value) + Number(overHeadOnGoing.value);
    const constProjectedSavings = Number(headCountSavings.value) + Number(scrapSavings.value) + Number(costAvoidanceSavings.value);
    const constYeralyBalance = Number(constProjectedSavings) - Number(totalOngoinCost);
    const constPayback = ((totalCost * 12)/(constProjectedSavings - totalOngoinCost)).toFixed(2);
    projectTotalCost.innerHTML = '$ ' + (totalCost);
    totalOnGoinCost.innerHTML = '$ ' + (totalOngoinCost);
    projectdSavings.innerHTML = '$ ' + (constProjectedSavings);
    yearlyBalance.innerHTML = '$ ' + constYeralyBalance;
    payBack.innerHTML = constPayback + ' months'
     
}

//If Project in Progress Load Phase Dates
const loadPhaseDates = (rows) =>{
    const understandStart = document.getElementById('understand_start_date');
    const understandFinish = document.getElementById('understand_finish_date');
    const assestmentStart = document.getElementById('assestment_start_date');
    const assestmentFinish = document.getElementById('assestment_finish_date');
    const planStart = document.getElementById('plan_start_date');
    const planFinish = document.getElementById('plan_finish_date');
    const designStart = document.getElementById('design_start_date');
    const designFinish = document.getElementById('design_finish_date');
    const executeStart = document.getElementById('execute_start_date');
    const executeFinish = document.getElementById('execute_finish_date');
    const transitionStart = document.getElementById('transition_start_date');
    const transitionFinish = document.getElementById('transition_finish_date');
    const supportStart = document.getElementById('support_start_date');
    const supportFinish = document.getElementById('support_finish_date');
    rows.forEach(element =>{
      understandStart.value = element.understand_start_date.slice(0,10);
      understandFinish.value = element.understand_finish_date.slice(0,10);
      assestmentStart.value = element.assestment_start_date.slice(0,10);
      assestmentFinish.value = element.assestment_finish_date.slice(0,10);
      planStart.value = element.plan_start_date.slice(0,10);
      planFinish.value = element.plan_finish_date.slice(0,10);
      designStart.value = element.design_start_date.slice(0,10);
      designFinish.value = element.design_finish_date.slice(0,10);
      executeStart.value = element.design_start_date.slice(0,10);
      executeFinish.value = element.design_finish_date.slice(0,10);
      transitionStart.value = element.transition_start_date.slice(0,10);
      transitionFinish.value = element.transition_finish_date.slice(0,10);
      supportStart.value = element.support_start_date.slice(0,10);
      supportFinish.value = element.support_finish_date.slice(0,10);
    })
}

const updateProject= async()  =>{

  const radioChecked = radioCheck();
  let project = { 
        id: clickedId,
        pr_name: projectName.value,
        cu_name: document.getElementById('customer_name').value,
        pr_owner:document.getElementById('pr_owner').value,
        email:document.getElementById('email').value,
        init_invest: initialInvestment.value,
        nre_hours: nreHours.value,
        ongo_headcount:headCountOnGoinCost.value,
        ongo_scrap:scrapOnGoin.value,
        ongo_spareparts:sparePartsOnGoinCost.value,
        ongo_overhead:overHeadOnGoing.value,
        savings_headcount:headCountSavings.value,
        savings_scrap:scrapSavings.value,
        savings_costavoidance: costAvoidanceSavings.value,
        dri_safety:document.getElementById('dri_safety').value,
        dri_quality:document.getElementById('dri_quality').value,
        dri_capacity: document.getElementById('dri_capacity').value,
        dri_customerreq:document.getElementById('dri_customerreq').value,
        pr_status:radioChecked,
        capex_po: document.getElementById('capex_po').checked,
        aware: document.getElementById('aware').checked,
        pr_start_date: document.getElementById('pr_start_date').value,
        pr_finish_date: document.getElementById('pr_finish_date').value,
        created_at: new Date(),
        updated_at: new Date()};
    try{
      const result = await fetch("http://10.105.169.30:3000/update_project", {method: "PUT", headers:{"content-type":"application/json"}, body: JSON.stringify(project)});
      //const rows = await result.json();
      //console.log(rows);

      if(radInProgress.checked){
        addPhaseProjectDates(clickedId);
      }
      
      
      
    }
    catch(e){
      console.log(e);
    }
        
       
}

function radioCheck(){
  const radioButtons = document.querySelectorAll('input[name = "paymentMethod"]');
  for(const radioButton of radioButtons){
    if(radioButton.checked){
      return radioButton.id.toString();
    }
  }
}

//Fields validation function
const validate = () => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach((form, index )=> {
    console.log(form);

    
      form.addEventListener('submit', async event => {
        if (!form.checkValidity()) {
          
          event.preventDefault()
          event.stopPropagation()
        }else{
          //TODO Update Project on DataBase
          updateProject();
          event.preventDefault();
          event.stopPropagation();
          
        }
  
        form.classList.add('was-validated')
      }, false)
      
    
  })
}

//Check for Project Status
radInProgress.onclick = () =>{    
      
  phasesDates.innerHTML = loadPhasesString;
}

radConcept.onclick = () =>{    

  phasesDates.textContent = '';

}

radOnHold.onclick = () =>{    

  phasesDates.textContent = '';
}

radFinish.onclick = () =>{
  phasesDates.textContent = '';
}
/////////////////////////////////////////////

const addPhaseProjectDates = async (projectId) =>{
  let projectPhases = {
    pr_id : projectId,
    understand_start_date : document.getElementById('understand_start_date').value,
    understand_finish_date : document.getElementById('understand_finish_date').value,
    assestment_start_date : document.getElementById('assestment_start_date').value,
    assestment_finish_date : document.getElementById('assestment_finish_date').value,
    plan_start_date : document.getElementById('plan_start_date').value,
    plan_finish_date : document.getElementById('plan_finish_date').value,
    design_start_date : document.getElementById('design_start_date').value,
    design_finish_date : document.getElementById('design_finish_date').value,
    execute_start_date : document.getElementById('execute_start_date').value,
    execute_finish_date : document.getElementById('execute_finish_date').value,
    transition_start_date : document.getElementById('transition_start_date').value,
    transition_finish_date : document.getElementById('transition_finish_date').value,
    support_start_date : document.getElementById('support_start_date').value,
    support_finish_date : document.getElementById('support_finish_date').value,
    created_at : new Date(),
    updated_at : new Date()
  };

  const result = await fetch("http://10.105.169.30:3000/phaseDate/create", {method: "POST", headers:{"content-type":"application/json"}, body: JSON.stringify(projectPhases) })
}

btnOpenProjectcharter.onclick = ()=>{
  sessionStorage.setItem("idProjectCharter", clickedId);
  console.log(clickedId);
  window.open(
    "project_charter.html", "_blank");
}

getProjectById(clickedId);
validate();


