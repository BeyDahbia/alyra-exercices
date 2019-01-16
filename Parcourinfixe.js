function ParcourInfixe( arbre ){
    if (arbre.racine===null)
     console.log(arbre  vide);
 	else console.log(arbre.racine + " ");
    if(arbre.filsG===null)
    	ParcourInfixe(arbre.filsD);
      else ParcourInfixe( arbre.filsG );
}