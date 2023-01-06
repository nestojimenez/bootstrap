let todos = [];
let clickedId = '';
const filterOwner = document.getElementById('filter_owner');
const filterStatus = document.getElementById('filter_status');
const filterCustomer = document.getElementById('filter_customer');

const projectsTotalCost = document.getElementById('projects_total_cost');
const projectTotalOnGoinCost = document.getElementById('projects_total_ongoing_cost');
const projectsTotalSavings = document.getElementById('projects_total_savings');
const totalYearlyBalance = document.getElementById('projects_yearly_balance');
const totalPayBack = document.getElementById('total_pay_back');


const getAllProyects= async ()=>{
    const result = await fetch("http://10.105.169.30:3000/todos", {method:"GET"});
    todos = await result.json();    //All Project Data on JSON format
    
    //fillHeaders(todos);  //Fill table headers with databse fields
    //console.log('Estos son todos' + todos);
    fillTable(todos);  //Fill table table

}

const fillTable = (values) =>{
    const tableBody = document.getElementById('pr_tbody');
    tableBody.innerHTML = "";
    values.forEach(element =>{
        const tr = document.createElement('tr');
        tr.setAttribute('id', `${element.id}`);
        tr.setAttribute('onclick', 'projectDetails(this.id)');

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
    createRoadMap(values);
}

function projectDetails(clicked_id){
    alert('Mi proyecto' + clicked_id);
    clickedId = clicked_id;
    sessionStorage.setItem("clicked_id", clickedId);
    //window.location.href = './project_details.html'
    window.open('./project_details.html', "_blank")
    
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
    const result = await fetch("http://10.105.169.30:3000/unique_owner", {method:"GET" });
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
        const result = await fetch("http://10.105.169.30:3000/project_filter/" + project, {method:"GET"});
        const rows = await result.json();
        //console.log(rows);
        fillTable(rows);
    }

    //console.log(filterOwner.value);
    
}

const getUniqueProejctStatus = async () =>{
    const result = await fetch("http://10.105.169.30:3000/unique_status", {method:"GET" });
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
        const result = await fetch("http://10.105.169.30:3000/status_filter/" + status, {method:"GET"});
        const rows = await result.json();
        //console.log(rows);
        fillTable(rows);
    }

    //console.log(filterStatus.value);
    
}

const getUniqueProejctCustomer = async () =>{
    const result = await fetch("http://10.105.169.30:3000/unique_customer", {method:"GET" });
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
        const result = await fetch("http://10.105.169.30:3000/customer_filter/" + customer, {method:"GET"});
        const rows = await result.json();
        //console.log(rows);
        fillTable(rows);
    }

    //console.log(filterStatus.value);
    
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
        
            
    })
    projectsTotalCost.innerHTML = `$ ${totalCostProjects}`;
    projectTotalOnGoinCost.innerHTML = `$ ${totalProjectOnGoingCost}`;
    projectsTotalSavings.innerHTML = `$ ${totalProjectsSavings}`;
    totalYearlyBalance.innerHTML = `$ ${Number(totalProjectsSavings) - Number(totalProjectOnGoingCost)}`;
    totalPayBack.innerHTML = ((totalCostProjects * 12)/(totalProjectsSavings - totalProjectOnGoingCost)).toFixed(2);
    //console.log(totalCostProjects);
}

const createProgressBars = (start, duration, pr_names) => {
        
    const progressBars = document.getElementById('progress_bars');
    progressBars.innerHTML = '';
    start.forEach((element, index) =>{
        const row = document.createElement('div');
       
        row.classList.add('row');
        row.classList.add('m-1');
        row.classList.add('p-1');

        const col = document.createElement('div');
        col.classList.add('col');

        const progress = document.createElement('div');
        progress.classList.add('progress')
        progress.setAttribute('style' ,"height: 25px")

        const progressBarA = document.createElement('div');
        progressBarA.classList.add('progress-bar');
        progressBarA.classList.add('bg-light');
        progressBarA.setAttribute('style', `width: ${element}%`);

        const progressBarB = document.createElement('div');
        progressBarB.classList.add('progress-bar');
        progressBarB.setAttribute('style', `width: ${duration[index]}%`);
        progressBarB.innerHTML = pr_names[index];

        progress.appendChild(progressBarA)
        progress.appendChild(progressBarB);
        col.appendChild(progress);
        row.appendChild(col);
        progressBars.appendChild(row);
    })
}



//Duracion en meses de todos los proyectos
const getRangeAllDates = (allData) =>{
    let datesArray = [];
    allData.forEach(element =>{
        datesArray.push(element.start);
        datesArray.push(element.finish);
    })
    //let datesOrderArray = datesArray.sort((a, b) =>{ b - a})
    let datesOrderArray = datesArray.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())//datesArray.sort((a, b) =>{ b - a})
    //console.log(datesOrderArray)
    const len = datesOrderArray.length;

    const allProjectsMonths =  calculateTotalMonthsDifference(datesOrderArray[0], datesOrderArray[len -1]);
    document.getElementById('date_start').innerHTML = datesOrderArray[len-1].slice(0,10);
    document.getElementById('date_finish').innerHTML = datesOrderArray[0].slice(0,10);
    document.getElementById('date_middle').innerHTML = datesOrderArray[len/2].slice(0,10);
    //console.log('Duracion de todos los proyectos: ' + allProjectsMonths);

    return allProjectsMonths;
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



//Array de Duraciones en meses para cada uno de  los projectos
function monthsForEachProject (allData){
    let eachProjectMonths = [];
    allData.forEach(element =>{
    
    eachProjectMonths.push(calculateTotalMonthsDifference(element.start, element.finish)) ;
    })
    console.log('Duraciones en meses para cada uno de  los projectos ' + eachProjectMonths);  //Duraciones en meses para cada uno de  los projectos
    return eachProjectMonths;
}

//Array Tiempo transcurrido del primer start en meses
const startMonthsDifferencePerProject = (allData) =>{
    let arrayStartMonthsDifference = [];
    let datesArray = [];
    
    allData.forEach(element =>{
        
        datesArray.push(element.start);
        datesArray.push(element.finish);
    })
    //let datesOrderArray = datesArray.sort((a, b) =>{ b - a});
    let datesOrderArray = datesArray.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())//datesArray.sort((a, b) =>{ b - a})
    allData.forEach(element =>{
        arrayStartMonthsDifference.push(calculateTotalMonthsDifference(element.start, datesOrderArray[0]))
    })
    console.log("Diferencia en el comienzo de cada proyecto: " + arrayStartMonthsDifference);
    return arrayStartMonthsDifference;
    
}

////Gets the project duration for each project on percentage of the total progress bar
const monthsForEachProjectPercentage = (dates) =>{
    const months = monthsForEachProject(dates);
    const totalMonths = getRangeAllDates(dates);
    let percentage = [];
    months.forEach(element =>{
        percentage.push((100 * element/totalMonths).toFixed(0))
    })
    console.log('Duracion de cada projecto en porcentaje de la barra   ' + percentage);
    return percentage;
}

////Gets the first project date and use this as base to define the started date for each project on percentage of the total progress bar
const startMonthsDifferencePerProjectPercentage = (dates) =>{
    const months = startMonthsDifferencePerProject(dates);
    const totalMonths = getRangeAllDates(dates);
    let percentage = [];
    months.forEach(element =>{
        percentage.push((100 * element/totalMonths).toFixed(0))
    })
    console.log('Diferencia de comienzo de cada proyecto en porcentaje de la barra   '+percentage);
    return percentage;
}

//Get array for start and finish dates for each project
///const dates = [{start: '2022-07-14', finish: '2022-10-14'}, {start: '2022-10-14', finish: '2022-12-14'}, {start: '2023-04-14', finish: '2023-07-14'}, {start: '2023-01-01', finish: '2023-06-14'}, {start: '2022-01-01', finish: '2023-06-14'}];
const getDatesArray = (todos)=>{
    let dates = [];
    todos.forEach(element =>{
        dates.push({start: element.pr_start_date, finish: element.pr_finish_date})
    })
    return dates;
}

////Loads Road Map for all Selected Projects
const createRoadMap = (todos) =>{
    const names = [];
    todos.forEach(element=>{
        names.push(element.pr_name);
    })
    let monthsPercentage = monthsForEachProjectPercentage(getDatesArray(todos));
    let startPercentage = startMonthsDifferencePerProjectPercentage(getDatesArray(todos));

    createProgressBars(startPercentage, monthsPercentage, names);
}


getAllProyects();
getUniqueProejctOwners();  //Load unique owners on select control 'filter_owners'
getUniqueProejctStatus();  //Load unique status on select control 'filter_status'
getUniqueProejctCustomer();//Load unique customer on select control 'filter_customer'

