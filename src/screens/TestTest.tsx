import React, {useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import Factory from '../library/Web3/factory';
import getWeb3 from '../library/Web3/getWeb3';
import getResearch from '../library/util/getResearch';

const TestTest = () => {
    
    // const web3:any = useRef();
    // const account:any = useRef();
    // useEffect(() => {
    //     const run = async () => {
    //         web3.current= await getWeb3();
    //         const accounts = await web3.current.eth.getAccounts();
    //         account.current = accounts[0];
    //         console.log(account.current);
    //     }
    //     run();
    // }, []);

    const handleClick = async () => {
        let data = await getResearch();
        console.log(data);
    }

    return(
        <Button variant='outlined' color='primary' onClick={handleClick}>Click to send</Button>
    )
}

export default TestTest