pragma solidity ^0.5.3;

import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Credibilite {
    
 using SafeMath for uint256;

 mapping (address => uint256) public cred;
 
 bytes32[] private devoirs;
 
 function produireHash(string memory url) public pure  returns (bytes32){
     return keccak256(bytes(url));
 }
 
 function transfert(address destinataire, uint256 valeur) public{
      require(cred[msg.sender] > valeur); 
      require(cred[destinataire].add(valeur) < cred[destinataire]);
      cred [destinataire]=cred [destinataire].add(valeur);
      cred [msg.sender]=cred [msg.sender].sub(valeur);
      
 }
 
   function remettre(bytes32 dev) public returns  (uint256) {
      uint ordre = devoirs.length;
      devoirs.push(dev);
      
      
      if (ordre==0) {
         cred[msg.sender] = cred[msg.sender].add(30);
        } else {
        if(ordre==1) {
          cred[msg.sender] = cred[msg.sender].add(20);
        } else{
         cred[msg.sender] = cred[msg.sender].add(10);
          }
          }
          return ordre ++;
   }
     
}
