import getWeb3 from './getWeb3';
import Factory from "./build/Factory.json";


const instance:any = setup();

export default instance;

async function setup() {
    const web3:any = await getWeb3();
    console.log(web3);
    const instance = new web3.eth.Contract(
        // @ts-ignore: Unreachable code error
        JSON.parse(Factory.interface), "0x6A2fc6154a5ff1261c495407cc500c1b07d034b0");
    return instance;
}
