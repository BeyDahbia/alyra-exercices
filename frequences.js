function frequences(text){
	var tab=[];
	for (var i =0;i<text.length; i++) {
		tab [i]=text.charAt(i);
		alert(tab[i]);
	}
	for (var i=0; i < tab.length; i++,) {
	alert(tab[i] +' '+ tab.indexOf(tab[i]));

	}
}