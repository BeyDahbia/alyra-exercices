

function factorielRecursifOpt(n,F) {
  // F===1 à l'appel de la fonction
    if(n === 0) {
        return F
    } else {
        return factorielRecursifOpt(n-1,F*n)
    }

}





