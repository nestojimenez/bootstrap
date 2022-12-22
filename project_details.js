//const clickedId = require('./view_projects');
let clickedId = sessionStorage.getItem('clicked_id')
console.log(clickedId);
document.getElementById('letrero').innerHTML = clickedId;