// Example starter JavaScript for disabling form submissions if there are invalid fields


  //Calculate project Name
  let projectNameResult = document.getElementById('project_name_result');
  let projectName = document.getElementById('project_name');
  //Calculate project on going cost
  let headCountOnGoing = document.getElementById('head_count_ongoing')
  let scrapOnGoing = document.getElementById('scrap_ongoing');
  let sparePartsOnGoing = document.getElementById('spare_parts_ongoing');
  let overHeadOnGoing = document.getElementById('overhead_ongoing');
  let totalOnGoinCost = document.getElementById('total_ongoing_cost');
  let onGoinCost = 0;
  //Calculate project on total cost
  let intialInvestment = document.getElementById('initial_investment');
  let nreHours = document.getElementById('nre_hours');
  let projectTotalCost = document.getElementById('project_total_cost');
  let cost = 0;
  //Calculate project total savings
  let headCountSavings = document.getElementById('head_count_savings');
  let scrapSavings = document.getElementById('scrap_savings');
  let costAvoidanceSavings = document.getElementById('cost_avoidance_savings');
  let totalSavings = document.getElementById('total_savings');
  let savings = 0;
  ////Calculate Yearly Balance
  let yearlyBalance = document.getElementById('yearly_balance')
  ////Calculate PayBack
  let payBack = document.getElementById('pay_back');
  ////Load to DataBase///////////////////////////////////////////////////////////
  let btnLoad = document.getElementById('btn_load');
  //////In Progress Project////////////////////////////////////////////////////////
  let divPhaseDates = document.getElementById('phase_dates');
  let radInProgress = document.getElementById('in_progress');
  let radInConcept = document.getElementById('concept');
  let radOnHold = document.getElementById('on_hold')
  let lastProjectLoadedId = '';
  
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

  const validate = () => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    //console.log('Array de Forms');
    //console.log(Array.from(forms)[0]);
    // Loop over them and prevent submission
    Array.from(forms).forEach((form, index )=> {
      console.log(form);

      
        form.addEventListener('submit', async event => {
          if (!form.checkValidity()) {
            
            event.preventDefault()
            event.stopPropagation()
          }else{
            createProject();
            //addPhaseProjectDates('5');
            //event.preventDefault()
            //event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
        console.log(lastProjectLoadedId);
        console.log(index);
        console.log(form.checkValidity());
      
    })
  }
      
  

  validate();
  //const radio = radioCheck();
  //radio = radio + 'A';
  //Calculate project Name
  projectName.onchange = () =>{
    projectNameResult.innerHTML = projectName.value;
  }

  ////Calculate project on going cost
  headCountOnGoing.onchange = ()=>{
    onGoinCost = Number(headCountOnGoing.value) + Number(scrapOnGoing.value) + Number(sparePartsOnGoing.value) + Number(overHeadOnGoing.value)
    totalOnGoinCost.innerHTML = '$ ' + String(onGoinCost);
    yearlyBalanceCalc();
  }
  scrapOnGoing.onchange = ()=>{
    onGoinCost = Number(headCountOnGoing.value) + Number(scrapOnGoing.value) + Number(sparePartsOnGoing.value) + Number(overHeadOnGoing.value)
    totalOnGoinCost.innerHTML = '$ ' + String(onGoinCost);
    yearlyBalanceCalc();
  }
  sparePartsOnGoing.onchange = ()=>{
    onGoinCost = Number(headCountOnGoing.value) + Number(scrapOnGoing.value) + Number(sparePartsOnGoing.value) + Number(overHeadOnGoing.value)
    totalOnGoinCost.innerHTML = '$ ' + String(onGoinCost);
    yearlyBalanceCalc();
  }
  overHeadOnGoing.onchange = ()=>{
    onGoinCost = Number(headCountOnGoing.value) + Number(scrapOnGoing.value) + Number(sparePartsOnGoing.value) + Number(overHeadOnGoing.value)
    totalOnGoinCost.innerHTML = '$ ' + String(onGoinCost);
    yearlyBalanceCalc();
  }

  //Calculate project total cost
  intialInvestment.onchange = ()=>{
    cost = Number(intialInvestment.value) + Number(nreHours.value);
    projectTotalCost.innerHTML = '$ ' + String(cost);
    payBackCalc();
  }
  nreHours.onchange = ()=>{
    cost = Number(intialInvestment.value) + Number(nreHours.value);
    projectTotalCost.innerHTML = '$ ' + String(cost);
    payBackCalc();
  }

  //Calculate project total savings
  headCountSavings.onchange = ()=> {
    savings = Number(headCountSavings.value) + Number(scrapSavings.value) + Number(costAvoidanceSavings.value);
    totalSavings.innerHTML = '$ ' + String(savings);
    yearlyBalanceCalc();
  }
  scrapSavings.onchange = ()=> {
    savings = Number(headCountSavings.value) + Number(scrapSavings.value) + Number(costAvoidanceSavings.value);
    totalSavings.innerHTML = '$ ' + String(savings);
    yearlyBalanceCalc();
  }
  costAvoidanceSavings.onchange = ()=> {
    savings = Number(headCountSavings.value) + Number(scrapSavings.value) + Number(costAvoidanceSavings.value);
    totalSavings.innerHTML = '$ ' + String(savings);
    yearlyBalanceCalc();
  }

  radInProgress.onclick = () =>{    
      
      divPhaseDates.innerHTML = loadPhasesString;
  }

  radInConcept.onclick = () =>{    
    
    divPhaseDates.textContent = '';
    
  }

  radOnHold.onclick = () =>{    
    
    divPhaseDates.textContent = '';
  }

  //Calculate yearly balance
  const yearlyBalanceCalc = () =>{
    yearlyBalance.innerHTML =  savings - onGoinCost;
    payBackCalc();
  }

  //Calculate payback
  const payBackCalc = ()=>{
    payBack.innerHTML = ((cost * 12)/(savings - onGoinCost)).toFixed(2);
  }

  const createProject= async()  =>{

    const radioChecked = radioCheck();
    let project = { pr_name: projectName.value,
          cu_name: document.getElementById('customer_name').value,
          pr_owner:document.getElementById('pr_owner').value,
          email:document.getElementById('email').value,
          init_invest: intialInvestment.value,
          nre_hours: nreHours.value,
          ongo_headcount:headCountOnGoing.value,
          ongo_scrap:scrapOnGoing.value,
          ongo_spareparts:sparePartsOnGoing.value,
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
        const result = await fetch("http://10.105.169.17:3000/create", {method: "POST", headers:{"content-type":"application/json"}, body: JSON.stringify(project)});
        const rows = await result.json();
        console.log(rows);

        if(radInProgress.checked){
          addPhaseProjectDates(rows[0].id);
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

    const result = await fetch("http://10.105.169.17:3000/phaseDate/create", {method: "POST", headers:{"content-type":"application/json"}, body: JSON.stringify(projectPhases) })
  }



  


