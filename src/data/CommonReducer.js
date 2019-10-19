export const CommonReducer = (...reducers) => (store,action) => {
	for(let i = 0; i < reducers.length; i++) {
		let newStore = reducers[i](store,action);
		if(newStore !== store) {
			return newStore;
		}
	}

	return store;
}