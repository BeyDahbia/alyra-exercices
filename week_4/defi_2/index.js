async function creatMetamaskDapp() {
	



const ballotAdress="0xdf46ceac79a089d07c8ffd7f63f0f3fdd6ad4672";	
const abi= [
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidat",
				"type": "address"
			},
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "postuler",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_participant",
				"type": "address"
			}
		],
		"name": "estAdmin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "accepterOffre",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_demandeur",
				"type": "address"
			},
			{
				"name": "_reputationMin",
				"type": "uint256"
			}
		],
		"name": "ajouterDemande",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "participant",
				"type": "address"
			},
			{
				"name": "nom",
				"type": "string"
			}
		],
		"name": "inscription",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "participant",
				"type": "address"
			}
		],
		"name": "estBanni",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "participant",
				"type": "address"
			}
		],
		"name": "aBannir",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidat",
				"type": "address"
			},
			{
				"name": "hashTravail",
				"type": "bytes32"
			}
		],
		"name": "livraison",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
//Metamask asks the dapp to use it 
const addresses = await ethereum.enable();

//recuperer la premiere case du tableau addresses juste en haut 
const address = addresses[0];

//Creat ethers Provider pour se connecter à un provider
const provider = new ethers.providers.Web3Provider(ethereum);
const contract = new ethers.Contract(ballotAdress, abi, provider.getSigner());







 