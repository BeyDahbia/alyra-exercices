
const ABI=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "s",
				"type": "string"
			}
		],
		"name": "ajouterCarte",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "ind",
				"type": "uint256"
			}
		],
		"name": "recuperer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

let dapp ={};

    //async function createMetamaskDapp() {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const addresses =  ethereum.enable();
		const address = addresses[0]
	    dapp = { address, provider };
		let PlaceMarche = new ethers.Contract("0xaa93bf03e6bd68e7720d01454103fc9f21c41066",
		 ABI,dapp.provider.getSigner());

		//creation d'un objet ipfs
		//const ipfs = IpfsHttpClient('localhost','5001')
const ipfs = new window.Ipfs({repo:'ipfs-'+ Math.random()})
let dernierImage

function charger(){
	let image = document.getElementById('fichierImage').files[0];
	const reader= new FileReader();
	reader.readAsArrayBuffer(image);
	reader.onloadend= function() {
     	ipfs.add(new ipfs.types.Buffer.from(reader.result)).then(r=>{
     	dernierImage=r[0].hash
         
         document.getElementById('lien').href="http://127.0.0.1.8080/ipfs/"+r[0].hash
         document.getElementById('lien').innerHTML = r[0].hash
	
    	})

    }
}

function recupererDernierImage (){
	ipfs.cat(dernierImage).then(res=>{
    document.getElementById('imgtxt').innerHTML = res.toString('base64');
    document.getElementById('imageRecupere').src="data:image/jpg;base64,"+ res.toString('base64');
	})
}
function recupererImage (multihash){
	ipfs.cat(multihash).then(res=>{
    document.getElementById('imgtxt').innerHTML = res.toString('base64');
    document.getElementById('imageRecupere').src = "data:image/jpg;base64,"+ res.toString('base64');
	})
}