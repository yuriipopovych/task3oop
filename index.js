
let user = {
	name: document.getElementById('name').value,
	sex: document.getElementById('sex').value,
	birth: document.getElementById('birthday').value,
	adress: document.getElementById('useradress').value,
	phoneNumber: document.getElementById('phonenumber').value,
	email: document.getElementById('em').value
}
let userData = new Array();
userData[0] = document.getElementById('name').value;
userData[1] = document.getElementById('sex').value;
userData[2] = document.getElementById('birthday').value;
userData[3] = document.getElementById('useradress').value;
userData[4] = document.getElementById('phonenumber').value;
userData[5] = document.getElementById('em').value;




function createTable() {
	var tbody = document.getElementById('tbodyId');
	for (var i = 0; i < 1; i++) {
		var row = document.createElement('tr');
		 for (var j = 0; j < userData.length; j++) {
		 	var cell = document.createElement("td");
		 	// cell.classList.add('clickTr');

		 	var cellText = document.createTextNode(userData[i]);
		 	cell.appendChild(cellText);
		 	row.appendChild(cell);
		 }
		 tbody.appendChild(row);
	}

}






// function createTable() {
// 	var tbody = document.getElementById('tbodyId');
// 	for (var i = 0; i < 1; i++) {
// 		var row = document.createElement('tr');
// 		 for (var j = 0; j < 6; j++) {
// 		 	var cell = document.createElement("td");
// 		 	// cell.classList.add('clickTr');
// 		 	var cellText = document.createTextNode("some text");
// 		 	cell.appendChild(cellText);
// 		 	row.appendChild(cell);
// 		 }
// 		 tbody.appendChild(row);
// 	}

// }