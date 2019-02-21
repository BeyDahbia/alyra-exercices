const ABI= [
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "offres",
		"outputs": [
			{
				"name": "entreprise",
				"type": "address"
			},
			{
				"name": "illustAccepter",
				"type": "address"
			},
			{
				"name": "titre",
				"type": "string"
			},
			{
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"name": "delai",
				"type": "uint256"
			},
			{
				"name": "etat",
				"type": "uint8"
			},
			{
				"name": "reputationMin",
				"type": "uint256"
			},
			{
				"name": "hashUrl",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "url",
				"type": "string"
			}
		],
		"name": "HashTravail",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "titre",
				"type": "string"
			},
			{
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"name": "delai",
				"type": "uint256"
			},
			{
				"name": "reputationMin",
				"type": "uint256"
			}
		],
		"name": "ajouterDemande",
		"outputs": [
			{
				"components": [
					{
						"name": "entreprise",
						"type": "address"
					},
					{
						"name": "illustAccepter",
						"type": "address"
					},
					{
						"name": "titre",
						"type": "string"
					},
					{
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"name": "delai",
						"type": "uint256"
					},
					{
						"name": "etat",
						"type": "uint8"
					},
					{
						"name": "reputationMin",
						"type": "uint256"
					},
					{
						"name": "hashUrl",
						"type": "bytes32"
					},
					{
						"name": "candidats",
						"type": "address[]"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "entreprise",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "entreprises",
		"outputs": [
			{
				"name": "entreprise",
				"type": "address"
			},
			{
				"name": "nom",
				"type": "string"
			},
			{
				"name": "reputation",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "listerOffres",
		"outputs": [
			{
				"components": [
					{
						"name": "entreprise",
						"type": "address"
					},
					{
						"name": "illustAccepter",
						"type": "address"
					},
					{
						"name": "titre",
						"type": "string"
					},
					{
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"name": "delai",
						"type": "uint256"
					},
					{
						"name": "etat",
						"type": "uint8"
					},
					{
						"name": "reputationMin",
						"type": "uint256"
					},
					{
						"name": "hashUrl",
						"type": "bytes32"
					},
					{
						"name": "candidats",
						"type": "address[]"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nom",
				"type": "string"
			}
		],
		"name": "inscriptionIllustrateur",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "demandes",
		"outputs": [
			{
				"name": "entreprise",
				"type": "address"
			},
			{
				"name": "illustAccepter",
				"type": "address"
			},
			{
				"name": "titre",
				"type": "string"
			},
			{
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"name": "delai",
				"type": "uint256"
			},
			{
				"name": "etat",
				"type": "uint8"
			},
			{
				"name": "reputationMin",
				"type": "uint256"
			},
			{
				"name": "hashUrl",
				"type": "bytes32"
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
				"name": "entreprise",
				"type": "address"
			},
			{
				"name": "hashUrl",
				"type": "bytes32"
			}
		],
		"name": "livraison",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nom",
				"type": "string"
			}
		],
		"name": "inscriptionEntreprise",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "illustrateurs",
		"outputs": [
			{
				"name": "illustrateur",
				"type": "address"
			},
			{
				"name": "nom",
				"type": "string"
			},
			{
				"name": "reputation",
				"type": "uint256"
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
				"name": "entreprise",
				"type": "address"
			}
		],
		"name": "postuler",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
let dapp ={};

    //async function createMetamaskDapp() {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const addresses =  ethereum.enable();
		const address = addresses[0]
	    dapp = { address, provider };
		let PlaceMarche = new ethers.Contract("0xea010d381623c173de30d04c35b870e3826b9edf",
		 ABI,dapp.provider.getSigner());
	//}

    /*
		const addresses = await ethereum.enable();
		//recuperer la premiere case du tableau addresses juste en haut 
		const address = addresses[0];
		//Connection au noeud forner par l'objet web3
		const provider = new ethers.providers.Web3Provider(ethereum);
		dapp = {address, provider};
		let contartPlaceDeMarche = new ethers.Contract("0xe71726acc32b059e148cb669cf25924a15a7d8d1",ABI,dapp.provider);
		console.log(dapp)
        let illustrateur=await contartPlaceDeMarche();
       */
       

		async function inscriptionIllustrateur() {
			nom = document.getElementById('illustr').value; 
			console.log("nomIllust "+nom);
			await PlaceMarche.inscriptionIllustrateur(nom);
			}
		async function inscriptionEntreprise() {
			nom = document.getElementById('entrep').value; 
			await PlaceMarche.inscriptionIllustrateur(nom);
			
			}
		async function ajouterDemande() {
			titre= document.getElementById('ajDm1').value; 
			
			remun= document.getElementById('ajDm2').value; 
			
			delai= document.getElementById('ajDm3').value; 
			
			reput= document.getElementById('ajDm4').value; 

			await PlaceMarche.ajouterDemande(titre, remun, delai, reput);
						}	

		async function postuler() {
				 addr= document.getElementById('postule').value; 
				await PlaceMarche.postuler(addr);
				
				}	
		
					
						
		async function accepterOffre() {
					addr = document.getElementById('acceptOffr').value; 
					await PlaceMarche.accepterOffre(addr);
					
					}	
	
		async function HashTravail() {
					url = document.getElementById('depoOff').value; 
					var hashT = await PlaceMarche.HashTravail(url);
					document.getElementById('hash').innerHTML="Le Hash du travail = "+hashT;
					
					}	

		async function livraison () {
					addr = document.getElementById('addrs').value; 
					await PlaceMarche.inscriptionIllustrateur(addr);
					console.log("livraison "+addr);
					}				

        async function listerOffres() {
				 
		var offres = await PlaceMarche.listerOffres();
		for (var i = 0; i < offres.length; i++) {
			offres[i];
			document.getElementById('offre').innerHTML="L'offre n° " +(i++)+" = "+offres[i];
		}
	}





