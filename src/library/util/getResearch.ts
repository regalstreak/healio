import getWeb3 from '../Web3/getWeb3';
import Factory from '../Web3/factory';

const getResearch = async () => {
    let list = []
    let fact:any = await Factory;
    let data = await fact.methods.getResearchlist().call();
    return data;
}

export default getResearch