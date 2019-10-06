import getWeb3 from './getWeb3';
import Factory from "./build/Factory.json";


const instance:any = setup();

export default instance;

async function setup() {
    const web3:any = await getWeb3();
    console.log(web3);
    const instance = new web3.eth.Contract(
        // @ts-ignore: Unreachable code error
        Factory.abi, "0x4678f906f11B5b6A5D041B51235f7b2B9a668Eed");
    return instance;
}
