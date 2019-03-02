
var todos =["Ashish"];

var input = prompt("What would you like todo??");


while(input!="quit")
{

	if(input==="list")
	{
		listodos();
	}
	else if (input === "new") {
		newtodos();
	}
	else if (input ==="delete") {
		deletetodos();
	}
	input = prompt("What would you like todo???");
}
console.log("Ok, you have exit the application");


function listodos()
{
	todos.forEach(function(todos,i) {

		console.log(i,todos);
	});
}

function newtodos()
{
	var adder = prompt("Enter the new todos :");
	todos.push(adder);
}
function deletetodos()
{
	var index = prompt("Enter the index which you want to be deleted");
	todos.splice(todos,1);
	console.log("Index deleted");
}