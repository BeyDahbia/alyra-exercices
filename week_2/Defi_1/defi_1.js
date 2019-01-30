
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
	return( retour);
}

function Cible_Difficulte(cible){
	var  CibleMax=2.7*Math.pow(10,67);
	var   difficulte = CibleMax/cible;
	alert('La Difficulté = ' + difficulte);
}

function ChampBits_Cible(ChampBits){
	var cibleB =  HexaLittleE_Hexa(ChampBits.substring(4,10));
    var exposant =  parseInt(ChampBits.substring(2,4),16)-3;
    cibleB +=  '00'.repeat(exposant);
    var cibleF = '0x'+'00'.repeat(32-exposant) + cibleB; 
     console.log('la cible finale = ' + cibleF);
	return cibleF;
}

function  VarInt_Decimal(varint){
	function convertVarInt(nbrInt){
	//test de la longeur du nbrInt pour determiner si c'est ==1 octet(1bytes)
	 //////premiere methode 
	 //if (nbrInt.length==2){
	 	//return parseInt(nbrInt,16);
	 //}
	 //on test les autres valeurs 
	 //var lg =nbrInt.substring(0,2);
	 //console.log(lg);
     /*if (lg == 'fd'){
     	return parseInt(nbrInt.substring(2,6),16);
     	 //console.log(lg);
     }
     if (lg == 'fe'){
     	return parseInt(nbrInt.substring(2,10),16);
     	 console.log(lg);
     }
     if (lg == 'ff'){
     	return parseInt(nbrInt.substring(2,19),16);
     	 console.log(lg);
     }*/
     ///////// 2 eme methode 
     /*if (nbrInt.length==2){
	 	return parseInt(nbrInt,16);
	 }
	 return parseInt(nbrInt.substring(2),16);
	 */
     //3 eme methode 

     return (nbrInt.length==2 ?  parseInt(nbrInt,16):parseInt(nbrInt.substring(2),16) );
     

} 
console.log('convert  de fe7030f000 ' + convertVarInt('fe7030f000'));
console.log('convert   de fd7030 ' + convertVarInt('fd7030'));
console.log('convert   de ff7030f00032431324 ' + convertVarInt('ff7030f00032431324'));

}

function timeConverter(UNIX_timestamp){
	var d = new Date(0);
	d.setUTCSecondes (UNIX_timestamp);
	return d.toUTCString();
}

function  ScriptEnHexa_OpCodes(scriptExa){

}


