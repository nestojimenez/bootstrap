// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()*/

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

  //Calculate yearly balance
  const yearlyBalanceCalc = () =>{
    yearlyBalance.innerHTML =  savings - onGoinCost;
    payBackCalc();
  }

  //Calculate payback
  const payBackCalc = ()=>{
    payBack.innerHTML = (cost * 12)/(savings - onGoinCost);
  }
  