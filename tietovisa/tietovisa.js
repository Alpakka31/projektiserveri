function tietovisa() {

	let piste = 0;

	// Alkukysymys
	let alku = confirm("Haluatko aloittaa tietovisan?");
	if (alku == true) {
		window.alert("Aloitetaan...")
	}
	else if (alku == false) {
		return;
	}
	else {
		window.alert("Et valinnut mitään...")
	}

	// KYSYMYKSET

	// eka kysymys
	k1 = prompt("Mikä on tietokoneen tärkein osa?")
	if (k1 == "Emolevy" || k1 == "emolevy") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	// toka kysymys
	k2 = prompt("Mitä CTRL+Z tekee wordissa?")
	if (k2 == "Kumoaa" || k2 == "kumoaa") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//kolmas kysymys
	k3 = prompt("Kuinka monta megatavua on gigatavussa?")
	if (k3 == "1024") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//neljäs kysymys
	k4 = prompt("Mikä on tietokoneväylä englanniksi?")
	if (k4 == "Bus" || k4 == "bus") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//viides kysymys
	k5 = prompt("Minkä merkkinen oli ensimmäinen tietokone?")
	if (k5 == "IBM" || k5 == "ibm") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//kuudes kysymys
	k6 = prompt("Kuinka monta merkkiä on tavussa?")
	if (k6 == "8") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//seisemäs kysymys
	k7 = prompt("Kuinka monta arvoa bitissä voi olla?")
	if (k7 == "2") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//kahdeksas kysymys
	k8 = prompt("Mistä sanasta tulee LAN verkon L kirjain?")
	if (k8 == "Local" || k8 == "local") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//yhdeksäs kysymys
	k9 = prompt("Mikä on BIOS koko nimeltään?")
	if (k9 == "Basic Input/Output System" || k9 == "basic input/output system") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//kymmenes kysymys
	k10 = prompt("Mikä on .exe koko nimeltään? \n 1. executable 2. execute 3. executed")
	if (k10 == "1") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else if (k10 == "2") {
		alert("Väärin! " + "Pisteesi on " + piste)
	}
	else {
		k10 == "3"
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//11 kysymys
	k11 = prompt("Mikä on HTTP koko nimeltään?")
	if (k11 == "Hypertext Transfer Protocol" || k11 == "hypertext transfer protocol") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//12 kysymys
	k12 = prompt("Mikä on HTTPS koko nimeltään?")
	if (k12 == "Hypertext Transfer Protocol Secure" || k12 == "hypertext transfer protocol secure") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//13 kysymys
	k13 = prompt("Mikä on FTP koko nimeltään?")
	if (k13 == "File Transfer Protocol" || k13 == "file transfer protocol") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//14 kysymys
	k14 = prompt("Mikä on SFTP koko nimeltään?")
	if (k14 == "SSH File Transfer Protocol" || k14 == "ssh file transfer protocol") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//15 kysymys
	k15 = prompt("Mikä on SGI koko nimeltään?")
	if (k15 == "Silicon Graphics" || k15 == "silicon graphics") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//16 kysymys
	k16 = prompt("Mikä on Bourne Shell toiselta nimeltään? \n 1. bsh 2. sh")
	if (k16 == "1") {
		alert("Väärin! " + "Pisteesi on " + piste)
	}
	else if (k16 == "2") {
		piste++;
		alert("Oikein! " + "Pisteesi on " + piste + " tällä hetkellä.")
	}
	else {
		alert("Väärin! " + "Pisteesi on " + piste)
	}

	//Lopputulos
	if (piste > 7) {
		alert("Onneksi olkoon! " + "Pisteesi oli " + piste)
	}
	else {
		alert("Hävisit visan! " + "Pisteesi oli " + piste)
	}
}