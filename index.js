// function getUserData() {
// 	var userData = [];
// 	userData[0] = document.getElementById('name').value;
// 	userData[1] = document.getElementById('sex').value;
// 	userData[2] = document.getElementById('birthday').value;
// 	userData[3] = document.getElementById('useradress').value;
// 	userData[4] = document.getElementById('phonenumber').value;
// 	userData[5] = document.getElementById('em').value;
// }

// document.getElementById('formId').addEventListener("submit", createTable);

// function createTd (value) {
// 	var td = document.createElement('td');
// 	var tdText = document.createTextNode(value);
// 	td.appendChild(tdText);
	  
// 	return td;
// }

// function createTable(event) {
// 	event.preventDefault();
// 	var table = document.getElementById("tbodyId");
// 	var row = document.createElement('tr');  
// 	row.appendChild(createTd(userData[0].value));
// 	row.appendChild(createTd(userData[1].value));
// 	row.appendChild(createTd(userData[2].value));
// 	row.appendChild(createTd(userData[3].value));
// 	row.appendChild(createTd(userData[4].value));
// 	row.appendChild(createTd(userData[5].value));
// 	table.appendChild(row)
// }







const users = [];
function getUserData() {
	const user = {
	fullName: document.getElementById('name'),
	sex: document.getElementById('sex'),
	birthDate: document.getElementById('birthday'),
	adress: document.getElementById('useradress'),
	phoheNumber: document.getElementById('phonenumber'),
	email: document.getElementById('em')
	};
	users.push(user);
	createTable();
}
document.getElementById('formId').addEventListener("submit", createTable);

function createTd (value) {
	const td = document.createElement('td');
	const tdText = document.createTextNode(value);
	td.appendChild(tdText);
	  
	return td;
}

function createTable(event) {
	event.preventDefault();
	const table = document.getElementById("tbodyId");
	const row = document.createElement('tr');
	users.forEach(
		(user) => {
			for (var prop in user) {
				row.appendChild(createTd(user[key]));
			}
		})
	// row.appendChild(createTd(users.fullName));
	// row.appendChild(createTd(users.sex));
	// row.appendChild(createTd(users.birthDate));
	// row.appendChild(createTd(users.adress));
	// row.appendChild(createTd(users.phoheNumber));
	// row.appendChild(createTd(users.email));
	table.appendChild(row)
}










