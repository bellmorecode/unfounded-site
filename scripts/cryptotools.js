var crypt = {
	uuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    },
	currentChainId: "0x0",
	chainName: function (id) {
        if (!id) {
            id = window.ethereum.chainId;
            mmx.currentChainId = window.ethereum.chainId;
        }
        if (id == "0x0") { return "Disconnected"; }
        if (id == "0x1") { return "Ethereum (mainnet)"; }
        if (id == "0xaa36a7") { return "Sepolia (test)"; }
        if (id == "0x89") { return "Polygon"; }
        if (id == "0x38") { return "BNB Smart Chain"; }
        if (id == "0x2105") { return "Base"; }
        if (id == "0x13882") { return "Polygon (amoy/test)"; }
        if (id == "0x14a34") { return "base-sepolia"; }
        if (id == "0x8173") { return "Apechain"; }
        return id;
    },
	chainHandle: function (id) {
        if (!id) {
            id = window.ethereum.chainId;
            mmx.currentChainId = window.ethereum.chainId;
        }
        if (id == "0x0") { return "unk"; }
        if (id == "0x1") { return "eth"; }
        if (id == "0xaa36a7") { return "sepolia"; }
        if (id == "0x38") { return "bnb"; }
        if (id == "0x89") { return "pol"; }
        if (id == "0x2105") { return "base"; }
        if (id == "0x13882") { return "pol-amoy"; }
        if (id == "0x14a34") { return "base-sepolia"; }
        if (id == "0x8173") { return "ape"; }
        return id;
    },
	maskedAddress: function (addr) {
        if (addr) {
            let len = addr.length;
            let stubLeft = addr.substring(0, 7);
            let stubRight = addr.substring(len - 5);
            return `${stubLeft}....${stubRight}`;
        }
        return addr;
    },
    chains: {
        Ethereum: "0x1", Polygon: "0x89", PolygonAmoy: "0x13882", Base: "0x2105", BaseSepolia: "0x14a34", Sepolia: "0xaa36a7", ApeChain: "0x8173"
    },
    testChains: {
        BaseSepolia: "0x14a34", Sepolia: "0xaa36a7", PolygonAmoy: "0x13882"
    },
    isTestChain: function (ch) {
        let res = false;

        let testChainList = [mmx.testChains.BaseSepolia, mmx.testChains.PolygonAmoy, mmx.testChains.Sepolia];
        res = testChainList.indexOf(ch) > -1;
        return res;
    },
    getContractRef: function (ca, abi, callback) {
        //console.log({ getContract: { ca, abi } })
        let provider = new ethers.BrowserProvider(window.ethereum);
        provider.getSigner().then(signer => {
            let contract = new ethers.Contract(ca, abi, signer);
            callback(contract);
        });
    },
	subscribeToChainEvents: function (acctChanged, chainChanged) {
        window.ethereum.on("accountsChanged",acctChanged);
        window.ethereum.on("chainChanged",chainChanged);
    },
	requestWalletConnect: function (onSuccess, onFail) {
		if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                  
                    if (accounts.length === 0) {
                        if (onFail) {
							onFail()
						}
                    } else {
                        if (onSuccess) {
							onSuccess(accounts);
						}
                    }
                });
        } else {
            alert('Please install a cryptowallet browser plugin.');
        }		
	},
	testWalletConnection: function (onSuccess, onFail) {
		if (window.ethereum) {
			window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
				if (accounts.length === 0) {	
					if (onFail) {
						onFail();
					}
				} else {
					if (onSuccess) {
						onSuccess(accounts);
					}
				}
			});
		} else {
			alert('Please install a cryptowallet browser plugin.');
		}
	},
    sendEthToAddress: function (addr, amount, callback) {
        if (window.ethereum) {
            try {
                let eth = window.ethereum;
                let provider = new ethers.BrowserProvider(eth);
                console.log({ provider });
                provider.getSigner().then( signer => {
                    console.log({ provider, signer });
                    let tx = signer.sendTransaction({to:addr, value:ethers.parseEther(amount) });
                    if (callback) {
                        tx.then(callback);  
                    } else {
                        tx.then(function (a) { console.log({a}); });
                    }
                });
                
            } catch (err) {
               console.log({donateError: err});
               alert('sorry. something went wrong.');
            }
        }
    }
}