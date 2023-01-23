const addMoreExpenses = `
<div class="col-sm-4">
<label for="firstName" class="form-label">PO Number</label>
<input type="text" class="form-control" id="po_number" placeholder="PO Number" value="" required>
<div class="invalid-feedback">
    Po number is required.
</div>
</div>

<div class="col-sm-4">
<label for="lastName" class="form-label">PO Amount</label>
<input type="text" class="form-control" id="po_amount" placeholder="PO Amount" value="" required>
<div class="invalid-feedback">
    PO amount is required.
</div>
</div>

<div class="col-md-4">
<label for="country" class="form-label">Expense Type</label>
<select class="form-select" id="po_type" required>
    <option value="">Select Option</option>
    <option>Neumatic</option>
    <option>Electrical</option>
    <option>Machining</option>
    <option>Mechanical</option>
</select>
<div class="invalid-feedback">
    Please select a valid Expense Type.
</div>
</div>
<hr class="my-4">`

let clickedId = sessionStorage.getItem('idProjectExpenses'); 
let projectName = sessionStorage.getItem('projectName');
let initInvestment = sessionStorage.getItem('projectInitInvestment');
//alert(clickedId);
const btnAddMoreExpenses = document.getElementById('btn_addmore_expenses');
const formMoreExpenses = document.getElementById('more_expenses');
const txtProjectName = document.getElementById('pr_name');
const ip = '10.105.169.39';

txtProjectName.textContent = projectName;

//Fields validation function
const validate = () => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach((form, index )=> {
      //console.log(form);
  
      
        form.addEventListener('submit', async event => {
          if (!form.checkValidity()) {
            
            event.preventDefault()
            event.stopPropagation()
          }else{
            //TODO Update Project on DataBase
            loadExpenses();
            alert('Expenses for project ID' + clickedId + 'And Project Name ' + projectName);
            //event.preventDefault();
            //event.stopPropagation();
            
          }
    
          form.classList.add('was-validated')
        }, false)
        
      
    })
}

const poSNumber = document.querySelectorAll('[id=po_number]');
console.log(poSNumber)

poSNumber.forEach(element =>{
    console.log(element.value)
})

btnAddMoreExpenses.onclick= ()=>{
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.classList.add('g-3');
    newRow.innerHTML = addMoreExpenses;
    console.log(newRow);
    formMoreExpenses.appendChild(newRow);
    
}

const loadExpenses = async ()=>{
    const poNumber = document.querySelectorAll('[id=po_number]');
    const poAmount = document.querySelectorAll('[id=po_amount]');
    const poType = document.querySelectorAll('[id=po_type]');
    
    poNumber.forEach(async (element, index) =>{
        console.log(element.value);
        console.log(poAmount[index].value);
        console.log(poType[index].value);

        let poExpense = {
            pr_id: clickedId,
            po_number : element.value,
            amount: poAmount[index].value,
            expense_type:poType[index].value,
            created_at: new Date(),
            updated_at: new Date()
        }
        const result = await fetch("http://" + ip + ":3000/expenses/create", {method: "POST", headers:{"content-type":"application/json"}, body: JSON.stringify(poExpense) })
    })
}

const getExpensesById = async (id) =>{
    const resultPhases = await fetch("http://" + ip + ":3000/expenses/getExpensesById/" + clickedId, {method:"GET"});
    const result = await resultPhases.json()
    console.log(result);
    calculateTotalExpenses(result);
}

const calculateTotalExpenses = (results) =>{
    let totalExpenses = 0.0;
    results.forEach(element =>{
        totalExpenses += Number(element.amount)
    })
    document.getElementById('project_total_expenses').textContent = '$ ' + parseFloat(totalExpenses).toFixed(2);
    document.getElementById('init_investment').textContent = '$ ' + parseFloat(initInvestment).toFixed(2);
    document.getElementById('amount_remaining').textContent = '$ ' + parseFloat(Number(initInvestment) - Number(totalExpenses)).toFixed(2);

    if((Number(initInvestment) - Number(totalExpenses)) < 0){
        document.getElementById('amount_remaining').style.backgroundColor = "red";
    }else{
        document.getElementById('amount_remaining').style.backgroundColor = "white";
    }
}
    

validate();
getExpensesById(clickedId);

