let todos = [];
const filterOwner = document.getElementById('filter_owner');
const filterStatus = document.getElementById('filter_status');
const filterCustomer = document.getElementById('filter_customer');

const projectsTotalCost = document.getElementById('projects_total_cost');
const projectTotalOnGoinCost = document.getElementById('projects_total_ongoing_cost');
const projectsTotalSavings = document.getElementById('projects_total_savings');
const totalYearlyBalance = document.getElementById('projects_yearly_balance');
const totalPayBack = document.getElementById('total_pay_back');


const getAllProyects= async ()=>{
    const result = await fetch("http://10.105.168.159:3000/todos", {method:"GET"});
    todos = await result.json();    //All Project Data on JSON format
    
    fillHeaders(todos);  //Fill table headers
    
    fillTable(todos);  //Fill table table

    
    
    
}

const fillTable = (values) =>{
    const tableBody = document.getElementById('pr_tbody');
    tableBody.innerHTML = "";
    values.forEach(element =>{
        const tr = document.createElement('tr');

        const arrayValues = Object.values(element);
        arrayValues.forEach(value =>{
            //console.log(value);
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        })
        tableBody.appendChild(tr);
        
    })
    loadTotalResume(values);
}

const fillHeaders = (todos) =>{
    const headers = Object.keys(todos[0]);  //Get headers for table
    const tableHeaders = document.getElementById('pr_table_headers');
    tableHeaders.innerHTML = '';
    

    headers.forEach(element => {
        const th = document.createElement('th');
        
        th.textContent = element;
        tableHeaders.appendChild(th);
    });
}

const getUniqueProejctOwners = async () =>{
    const result = await fetch("http://10.105.168.159:3000/unique_owner", {method:"GET" });
    const owners = await result.json();    //All Project Data on JSON format
    
    owners.forEach(element =>{
        const value = Object.values(element);
        console.log(value[0]);
        const option = document.createElement('option')
        option.textContent = value[0];
        filterOwner.appendChild(option);
    })
    //console.log(owners);
}

filterOwner.oninput = async ()=> {

    if(filterOwner.value === ''){
        getAllProyects();
    }
    else{
        const project = filterOwner.value;
        const result = await fetch("http://10.105.168.159:3000/project_filter/" + project, {method:"GET"});
        const rows = await result.json();
        console.log(rows);
        fillTable(rows);
    }

    console.log(filterOwner.value);
    
}

const getUniqueProejctStatus = async () =>{
    const result = await fetch("http://10.105.168.159:3000/unique_status", {method:"GET" });
    const status = await result.json();    //All Project Data on JSON format
    
    status.forEach(element =>{
        const value = Object.values(element);
        console.log(value[0]);
        const option = document.createElement('option')
        option.textContent = value[0];
        filterStatus.appendChild(option);
    })
    //console.log(owners);
}

filterStatus.oninput = async ()=> {

    if(filterStatus.value === ''){
        getAllProyects();
    }
    else{
        const status = filterStatus.value;
        const result = await fetch("http://10.105.168.159:3000/status_filter/" + status, {method:"GET"});
        const rows = await result.json();
        console.log(rows);
        fillTable(rows);
    }

    console.log(filterStatus.value);
    
}

const getUniqueProejctCustomer = async () =>{
    const result = await fetch("http://10.105.168.159:3000/unique_customer", {method:"GET" });
    const customer = await result.json();    //All Project Data on JSON format
    
    customer.forEach(element =>{
        const value = Object.values(element);
        console.log(value[0]);
        const option = document.createElement('option')
        option.textContent = value[0];
        filterCustomer.appendChild(option);
    })
    //console.log(owners);
}

filterCustomer.oninput = async ()=> {

    if(filterCustomer.value === ''){
        getAllProyects();
    }
    else{
        const customer = filterCustomer.value;
        const result = await fetch("http://10.105.168.159:3000/customer_filter/" + customer, {method:"GET"});
        const rows = await result.json();
        console.log(rows);
        fillTable(rows);
    }

    console.log(filterStatus.value);
    
}

const loadTotalResume =(todos)=>{
    let totalCostProjects = 0.0;
    let totalProjectOnGoingCost = 0.0;
    let totalProjectsSavings = 0.0;

    let difference = 0;

    todos.forEach(element => {
        totalCostProjects = Number(totalCostProjects) + Number(element.init_invest) + Number(element.nre_hours);
        totalProjectOnGoingCost = Number(totalProjectOnGoingCost) + Number(element.ongo_headcount) + Number(element.ongo_overhead) + Number(element.ongo_scrap) + Number(element.ongo_spareparts);
        totalProjectsSavings = Number(totalProjectsSavings) + Number(element.savings_costavoidance) + Number(element.savings_headcount) + Number(element.savings_scrap);
        console.log(calculateTotalMonthsDifference(element.pr_start_date, element.pr_finish_date));
            
    })
    projectsTotalCost.innerHTML = `$ ${totalCostProjects}`;
    projectTotalOnGoinCost.innerHTML = `$ ${totalProjectOnGoingCost}`;
    projectsTotalSavings.innerHTML = `$ ${totalProjectsSavings}`;
    totalYearlyBalance.innerHTML = `$ ${Number(totalProjectsSavings) - Number(totalProjectOnGoingCost)}`;
    totalPayBack.innerHTML = ((totalCostProjects * 12)/(totalProjectsSavings - totalProjectOnGoingCost)).toFixed(2);
    //console.log(totalCostProjects);
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
    return months;
}

getAllProyects();
getUniqueProejctOwners();  //Load unique owners on select control 'filter_owners'
getUniqueProejctStatus();  //Load unique status on select control 'filter_status'
getUniqueProejctCustomer();//Load unique customer on select control 'filter_customer'