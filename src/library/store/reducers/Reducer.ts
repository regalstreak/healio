import { ADD_CONTRACT_ADDRESS } from '../actions/Actions';

const initState = {
	contractAddress: '',
}

const Reducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_CONTRACT_ADDRESS:
			return {
				...state,
				contractAddress: action.contractAddress
			}
	}
}

export default Reducer;