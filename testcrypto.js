function chiffreCesar(text,cle){
	var tab=[];
	for (var i =0;i<text.length; i++) {
		tab [i]=text.charAt(i);
		tab[i]= String.fromCodePoint(tab[i].charCodeAt(0)+cle.charCodeAt(0);
}
	
alert(tab);
}