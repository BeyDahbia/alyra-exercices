function frequences(text){
	var tab=[];
	var frequence =[];
	for (var i =0;i<text.length; i++) {
		tab [i]=text.charAt(i);
	}

		for (var i=0; i < tab.length; i++,) {
			for (var j= 0; j< tab.length; j++) {
				if (tab[i]===tab[j]) 
					frequence[i]+=1;
		}	

}
}