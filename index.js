
// let user = {
// 	name: document.getElementById('name').value,
// 	sex: document.getElementById('sex').value,
// 	birth: document.getElementById('birthday').value,
// 	adress: document.getElementById('useradress').value,
// 	phoneNumber: document.getElementById('phonenumber').value,
// 	email: document.getElementById('em').value
// }
// let userData = new Array();
function getUserData() {
var userData = [];
userData[0] = document.getElementById('name').value;
userData[1] = document.getElementById('sex').value;
userData[2] = document.getElementById('birthday').value;
userData[3] = document.getElementById('useradress').value;
userData[4] = document.getElementById('phonenumber').value;
userData[5] = document.getElementById('em').value;
}




document.getElementById('formId').addEventListener("submit", createTable, getUserData);

function createTable(event) {
	event.preventDefault();
	var tbody = document.getElementById('tbodyId');
		var row = document.createElement('tr');
		 for (var j = 1; j < userData.length; j++) {
		 	var cell = document.createElement("td");
		 	var cellText = document.createTextNode(userData[0].value);
		 	cell.appendChild(cellText);
		 	row.appendChild(cell);
		 }
		 tbody.appendChild(row);
}






