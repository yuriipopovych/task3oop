

function getUserData() {
	var userData = [];
	userData[0] = document.getElementById('name').value;
	userData[1] = document.getElementById('sex').value;
	userData[2] = document.getElementById('birthday').value;
	userData[3] = document.getElementById('useradress').value;
	userData[4] = document.getElementById('phonenumber').value;
	userData[5] = document.getElementById('em').value;
}

document.getElementById('formId').addEventListener("submit", createTable);


function createTd (value) {
	var td = document.createElement('td');
	var tdText = document.createTextNode(value);
	td.appendChild(tdText);
	  
	return td;
}


function createTable(event) {
	event.preventDefault();

	var table = document.getElementById("tbodyId");

	var row = document.createElement('tr');
	  
	row.appendChild(createTd(userData[0].value));
	row.appendChild(createTd(userData[1].value));
	row.appendChild(createTd(userData[2].value));
	row.appendChild(createTd(userData[3].value));
	row.appendChild(createTd(userData[4].value));
	row.appendChild(createTd(userData[5].value));
	  
	table.appendChild(row)
}











