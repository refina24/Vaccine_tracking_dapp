// Connect to MetaMask
async function connectMetaMask() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            alert('MetaMask connected successfully!');
        } catch (error) {
            console.error('Error connecting to MetaMask:', error);
            alert('Error connecting to MetaMask. Please check the console for details.');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to interact with the blockchain.');
    }
}

// Function to add a vaccine
async function addVaccine() {
    const batchNumber = document.getElementById('batchNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contractAddress = '0xe9c9C523eC2349e4842C6B18a339a00559728D23'; // Replace with your deployed contract address
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_expirationDate",
                    "type": "uint256"
                }
            ],
            "name": "addVaccine",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_date",
                    "type": "uint256"
                }
            ],
            "name": "updateVaccineExpiryStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "batchNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "name": "VaccineAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "batchNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "name": "VaccineExpired",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_date",
                    "type": "uint256"
                }
            ],
            "name": "checkVaccineExpiry",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "vaccines",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // Replace with your contract ABI
    const contract = new web3.eth.Contract(abi, contractAddress);
    try {
        await contract.methods.addVaccine(batchNumber, expirationDate).send({ from: accounts[0] });
        alert('Vaccine added successfully!');
    } catch (error) {
        console.error('Error adding vaccine:', error);
        alert('Error adding vaccine. Please check the console for details.');
    }
}

// Function to check vaccine expiry
async function checkVaccineExpiry() {
    const batchNumber = document.getElementById('checkBatchNumber').value;
    const dateToCheck = document.getElementById('checkDate').value;
    const web3 = new Web3(window.ethereum);
    const contractAddress = '0xe9c9C523eC2349e4842C6B18a339a00559728D23'; // Replace with your deployed contract address
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_expirationDate",
                    "type": "uint256"
                }
            ],
            "name": "addVaccine",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_date",
                    "type": "uint256"
                }
            ],
            "name": "updateVaccineExpiryStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "batchNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "name": "VaccineAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "batchNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "name": "VaccineExpired",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_batchNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_date",
                    "type": "uint256"
                }
            ],
            "name": "checkVaccineExpiry",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "vaccines",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "expiryDate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // Replace with your contract ABI
    const contract = new web3.eth.Contract(abi, contractAddress);
    try {
        const isExpired = await contract.methods.checkVaccineExpiry(batchNumber, dateToCheck).call();
        if (isExpired) {
            alert(`The vaccine with batch number ${batchNumber} has expired!`);
        } else {
            alert(`The vaccine with batch number ${batchNumber} is still valid.`);
        }
    } catch (error) {
        console.error('Error checking vaccine expiry:', error);
        alert('Error checking vaccine expiry. Please check the console for details.');
    }
}