let id="no";

function login() {
	if (document.getElementById('username').value == "admin" && document.getElementById('password').value == "admin") {
		window.location.href = "index.html"
		login = "true"
	}
}
// localStorage.clear();
selectData();
let users = [];
function manageData(){
	let storage = JSON.parse(localStorage.getItem("users"));
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
	let age = document.getElementById('age').value;
	let gender = document.getElementById('gender').value;
	let subscription = document.getElementById('subscription').value;
	let fees = document.getElementById('fees').value;
	let data = {
		"name" : name,
		"phone" : phone,
		"email" : email,
		"age" : age,
		"gender" : gender,
		"subscription" : subscription,
		"fees" : fees
	}
	if (id == "no"){
		if(storage==null){
			users.push(data)
			localStorage.setItem("users", JSON.stringify(users))
			console.log(localStorage.getItem("users"))
		}
		else{
			users = JSON.parse(localStorage.getItem("users"))
			users.push(data)
			localStorage.setItem("users", JSON.stringify(users))
			console.log(localStorage.getItem("users"))
		}
	} else {
		let arr=getCrudData();
		arr[id] = data;
		setCrudData(arr);
	}

}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k].name}</td><td>${arr[k].email}</td><td>${arr[k].phone}</td><td>${arr[k].age}</td><td>${arr[k].gender}</td><td>${arr[k].subscription}</td><td>${arr[k].fees}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid].name;
	document.getElementById('phone').value=arr[rid].phone;
	document.getElementById('email').value=arr[rid].email;
	document.getElementById('age').value=arr[rid].age;
	document.getElementById('gender').value=arr[rid].gender;
	document.getElementById('subscription').value=arr[rid].subscription;
	document.getElementById('fees').value=arr[rid].fees;
	$('#addMember').modal('show');
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('users'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('users',JSON.stringify(arr));
}

