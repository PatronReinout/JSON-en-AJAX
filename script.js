var btn = document.getElementById("btn");
var animalcontainer = document.getElementById("dieren");
var paginaNummer = 1;
//haal de ID's uit de index
//maak een nieuwe variable aan namelijk 1

btn.addEventListener("click", function() {
	//roept deze functie aan als je op de button klikt
	var request = new XMLHttpRequest();
	request.open(
		"GET",
		"https://learnwebcode.github.io/json-example/animals-" + //JSON files
			paginaNummer +
			".json"
	); //maakt verbinding met de JSON file
	request.onload = function() {
		var ourdata = JSON.parse(request.responseText); //maak variable van de opgehaalde JSON gegevens
		console.log(ourdata[0]);
		tekst(ourdata); //gebruik de opgehaalde data in een functie
	};
	request.send();
	paginaNummer++; // als je nog een keer klikt op de button zal het paginanummer "1" omhoog gaan en een nieuwe JSON file ophalen die andere gegvens bevat
});

function tekst(data) {
	var stringie = ""; //maak een lege variable aan waar de de JSON regels inkomen te staan

	for (i = 0; i < data.length; i++) {
		//net zo lang zo loopen tot elk object uit array is gehaald

		stringie +=
			"<p>" + data[i].name + " is een " + data[i].species + " en houdt van "; //voor elk object in de array wordt er een nieuwe variable lijn tekst gemaakt

		for (ii = 0; ii < data[i].foods.likes.length; ii++) {
			//loopen door de array in het object en in het object weer door de array loopen
			if (ii == 0) {
				//net zolang doen tot er niks meer in de array staat
				stringie += data[i].foods.likes[ii];
			} else {
				stringie += " and " + data[i].foods.likes[ii];
			}
		}

		stringie += " and dislikes"; //hetzelfde doen alleen dan voor de array "dislikes"
		for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
			if (ii == 0) {
				stringie += data[i].foods.dislikes[ii];
			} else {
				stringie += " and " + data[i].foods.dislikes[ii];
			}
		}

		stringie += ".</p>";
	}
	animalcontainer.insertAdjacentHTML("beforeend", stringie); //alles naar html vertalen
}
