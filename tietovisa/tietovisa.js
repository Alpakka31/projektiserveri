function tietovisa() {

let score;
	score = 0;

alert("Aloitetaan!")

	let q1;

	q1 = prompt("Mikä on tietokoneen tärkein osa?")
	if(q1 == "Emolevy" || q1 == "emolevy") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q2 = prompt("Mitä CTRL+Z tekee wordissa?")
	if(q2 == "Kumoaa" || q2 == "kumoaa") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q3 = prompt("Kuinka monta megatavua on gigatavussa?")
	if(q3 == "1024") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q4 = prompt("Mikä on tietokoneväylä englanniksi?")
	if(q4 == "Bus" || q4 == "bus") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}
	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q5 = prompt("Minkä merkkinen oli ensimmäinen tietokone?")
	if(q5 == "IBM" || q5 == "ibm") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}
	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q6 = prompt("Kuinka monta merkkiä on tavussa?")
	if(q6 == "8") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}
	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q7 = prompt("Kuinka monta arvoa bitissä voi olla?")
	if(q7 == "2") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q8 = prompt("Mistä sanasta tulee LAN verkon L kirjain?")
	if(q8 == "Local" || q8 == "local") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q9 = prompt("Mikä on BIOS koko nimeltään?")
	if(q9 == "Basic Input/Output System" || q9 == "basic input/output system") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q10 = prompt("Mikä on .exe koko nimeltään? 1. executable 2. execute 3. executed")
	if(q10 == "1") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else if (q10 == "2") {
		alert("Väärin! " + "Pisteesi on " + score)
}

	else {
		q10 == "3"
		alert("Väärin! " + "Pisteesi on " + score)
}



	q11 = prompt("Mikä on HTTP koko nimeltään?")
	if(q11 == "Hypertext Transfer Protocol" || q11 == "hypertext transfer protocol") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q12 = prompt("Mikä on HTTPS koko nimeltään?")
	if(q12 == "Hypertext Transfer Protocol Secure" || q12 == "hypertext transfer protocol secure") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q13 = prompt("Mikä on FTP koko nimeltään?")
	if(q13 == "File Transfer Protocol" || q13 == "file transfer protocol") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q14 = prompt("Mikä on SFTP koko nimeltään?")
	if(q14 == "SSH File Transfer Protocol" || q14 == "ssh file transfer protocol") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}



	q15 = prompt("Mikä on SGI koko nimeltään?")
	if(q15 == "Silicon Graphics" || q15 == "silicon graphics") {
		score++;
		alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

	else {
		alert("Väärin! " + "Pisteesi on " + score)
}

q16 = prompt("Mikä on Bourne Shell toiselta nimeltään? 1. shell 2. sh")
if(q16 == "2") {
	score++;
	alert("Oikein! " + "Pisteesi on " + score + " tällä hetkellä.")
}

else if (q16 == "1") {
	alert("Väärin! " + "Pisteesi on " + score)
}

else {
	alert("Väärin! " + "Pisteesi on " + score)
}


	if(score > 7) {
		alert("Onneksi olkoon! " + "Pisteesi oli " + score)
}
	else {
		alert("Hävisit visan! " + "Pisteesi oli " + score)
	}
}
