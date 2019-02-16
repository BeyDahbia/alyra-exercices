pragma solidity ^0.5.3;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";
pragma experimental ABIEncoderV2;

contract PlaceMarche {
    
  using SafeMath for uint;
  
  struct  Demande  {
      address entreprise;
      address illustAccepter;
      string titre;
      uint256 remuneration;
      uint256 delai;
      Etat  etat ;
      uint256 reputationMin;
      bytes32 hashUrl;
      address[] candidats ;
  }
   
    struct Illustrateur {
        address illustrateur;
        string nom;
        uint256 reputation;
    }
    
    struct Entreprise{
        address entreprise;
        string nom;
        uint256 reputation;
    }
 
  mapping(address => Demande) public demandes;
  mapping(address => Entreprise) public entreprises;
  mapping(address => Illustrateur) public illustrateurs;
  Demande [] public offres ;
  enum  Etat  {OUVERT, ENCOURS, FERMEE}


  function inscriptionIllustrateur(string memory nom) public {
    Illustrateur storage illustrateur = illustrateurs[msg.sender];
    illustrateurs[msg.sender].illustrateur = msg.sender;
    illustrateurs[msg.sender].reputation = 1;
    illustrateurs[msg.sender].nom = nom ;
    
    

  }
  
   function inscriptionEntreprise(string memory nom) public {
    Entreprise storage entreprise = entreprises[msg.sender];
    entreprises[msg.sender].entreprise=msg.sender;
    entreprises[msg.sender].reputation = 1;
    entreprises[msg.sender].nom = nom ;
  }
  
  function ajouterDemande(string  memory titre, uint256 remuneration, uint256 delai ,uint256 reputationMin) payable public returns (Demande memory) {
      require(entreprises[msg.sender].reputation==1);
      Demande memory demande;
      uint256 prixComiss = (remuneration * 2/100);
      demande.remuneration = prixComiss + msg.value;
      demande.titre = titre;
      demande.entreprise = msg.sender ;
      demande.etat =  Etat.OUVERT;
      demande.reputationMin = reputationMin;
      demande.delai = delai;
      demande.illustAccepter = address(0);
      offres.push(demande);
     
      return demande;
  }
 
  function postuler(address entreprise)  public {
      require(illustrateurs[msg.sender].reputation >= demandes[entreprise].reputationMin);
     demandes[entreprise].candidats.push(msg.sender);
  }
  function listerOffres()public return (Demande [] memory){
    return offres;
  }



 function accepterOffre(address entreprise) public {
     require(demandes[entreprise].illustAccepter==address(0));
     require(entreprises[msg.sender].reputation==1);
     demandes[entreprise].etat = Etat.ENCOURS;
     demandes[entreprise].illustAccepter = msg.sender;
 }
 
function HashTravail(string memory url) public pure  returns (bytes32){
     return keccak256(bytes(url));
 }
 function livraison(address entreprise ,bytes32 hashUrl) public payable{
   illustrateurs[msg.sender].reputation.add(1);
   demandes[entreprise].hashUrl= hashUrl;
   demandes[entreprise].etat = Etat.FERMEE; 
   uint256 prixCom = (demandes[entreprise].remuneration * 2 / 100); 
   msg.sender.transfer(demandes[entreprise].remuneration- prixCom);
 }
}