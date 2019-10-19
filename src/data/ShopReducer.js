import { actionType, dataType } from './Type';

export const ShopReducer = (storeData,action) => {

	switch(action.type) {
		case actionType.LOAD_DATA:
			return {...storeData, 
				[action.payload.dataType]: action.payload.data,
				[`${action.payload.dataType}_total`]: action.payload.total,
				[`${action.payload.dataType}_params`]: action.payload.params
				};
		case actionType.SET_PAGESIZE:
			return {...storeData, pageSize: action.payload };
		case actionType.SET_SORT_PROPERTY:
			return {...storeData, sortKey: action.payload }
		case actionType.DATA_STORE:
			if (action.payload.dataType === dataType.ORDERS) {
				return {...storeData, order: action.payload.data}
			}
			break;
		default:
			return storeData || {};
	}
}