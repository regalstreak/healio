import Web3 from "web3";

declare global {
    interface Window {
        web3: any;
        ethereum: any;
    }
}

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        if (window.web3) {
            // Use Mist/MetaMask's provider.
            const web3 = new Web3(window.web3.currentProvider);
            console.log("Injected web3 detected.");
            window.ethereum.enable();
            resolve(web3);
        }
    });

export default getWeb3;
