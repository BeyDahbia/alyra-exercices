
function test(){
	var valeur = document.getElementById("valueConvert").value;
	var choixConvers=  document.getElementById("typeConvert").value;
	//alert(valeur);
	//alert(choixConvers);
	
	switch (choixConvers){
		case "1" : Hexa_Decimal(valeur);
			break;
		case "2" : Decimal_Hexa(valeur);
			break;	
		case "3" : HexaLittleE_Hexa(valeur);
			break;
		case "4" : VarInt_Decimal(valeur);
			break;	
		case "5" : ChampBits_Cible(valeur);
			break;
		case "6" : Cible_Difficulte(valeur);
			break;	
		case "7" : ScriptEnHexa_OpCodes(valeur);
			break;
	}
}
function Hexa_Decimal(valeur) {
	alert("Valeur Hexa = " + parseInt(valeur,16));
}
function Decimal_Hexa(valeur) {
	var Dec =parseInt(valeur).toString(16);
	alert("Valeur Decimal = " + Dec);
}
function HexaLittleE_Hexa(h){
	if(h.length%2==1){
		h='0' +h
	}
	let retour = ""
	for (var i = 0; i < h.length-1; i+=2) {
		retour= h[i]+ h[i+1] +retour
	}
	alert(" La valeur en Hexa =" + retour);
}
function Cible_Difficulte(cible){
	var  CibleMax=2.7*Math.pow(10,67);
	var   difficulte = CibleMax/cible;
	alert('Difficulté = ' + difficulte);
}
function ChampBits_Cible(ChampBits){
	var cibleB= parseInt(ChampBits.substring(4,ChampBits.length));
	alert('cibleB=' + cibleB);
}


