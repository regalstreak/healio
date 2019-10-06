import getWeb3 from '../Web3/getWeb3';
import Factory from '../Web3/factory';

const addResearch = async (name, researcherName, field, account) => {
    let fact:any = await Factory;
    await fact.methods.newResearch(name, researcherName, field).send({from: account});
}

export default addResearch