import getWeb3 from '../Web3/getWeb3';
import Factory from '../Web3/factory';
import Research from '../Web3/build/Research.json';

const getResearch = async () => {
    let fulldata:any = []
    const web3:any = await getWeb3();
    let list = []
    let fact:any = await Factory;
    let data = await fact.methods.getResearchlist().call();
    console.log(data);
    
    for(let i = 0; i < data.length; i++) {
        let instance = new web3.eth.Contract(
            // @ts-ignore: Unreachable code errorS
            JSON.parse(Research.interface), data[i]);

        let tempp:any = await instance
        let temp:any = await tempp.methods.getResearchInfo().call();
        fulldata.push(temp);
    }
    return fulldata;
}

export default getResearch