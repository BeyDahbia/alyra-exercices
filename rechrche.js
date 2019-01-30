//fonction arbre 
function recherche( arbre ,x){
    if (arbre.racine===null)
     console.log("arbre  vide");
 	else if(arbre.racine===x)   
 		console.log("x appartient a l arbre");
    else if(arbre.filsG<x)
    	recherche( arbre.filsD ,x);
      else recherche( arbre.filsG ,x);
}