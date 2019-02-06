//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
// Exercice3.1.1 Passer à l'artiste suivant
pragma solidity ^0.4.25;

contract SceneOuverte {

  string [12] passagesArtistes;
  uint creneauxLibres=12;
  uint tour;

  function sInscrire(string nomDArtiste) public  {
    if(creneauxLibres>0){
      passagesArtistes[12-creneauxLibres]=nomDArtiste;
      creneauxLibres--;
    }
  }
  function passageArtisteSuivant() public  {
    if(tour !=12 ) {
      tour++;
    }
  }
  function artisteEnCours() public constant returns (string){
     if (tour <=12){
       return passagesArtistes[tour];
     }
     else  return "FIN";
      }
      }
      ////


      /////Exercice 3.1.1.1 Passer à l’artiste suivant/////


 