import { actionType, dataType } from './Type.js';
//import { data as phData } from './placeholderData';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType,params) => ({
	type: actionType.LOAD_DATA,
	payload: dataSource.GetData(dataType, params).then(response => ({
			dataType: dataType,
			data: response.data,
			total: Number(response.headers["x-total-count"]),
			params: params
		}))
});

export const setPageSize = (newSize) => ({
	type: actionType.SET_PAGESIZE,
	payload: newSize
})

export const setSortProperty = (newPro) => ({
	type: actionType.SET_SORT_PROPERTY,
	payload: newPro
})

export const placeOrder = (order) => ({
	type: actionType.DATA_STORE,
	payload: dataSource.StoreData(dataType.ORDERS, order).then(response =>({
		dataType:dataType.ORDERS, data: response.data
	}))
}) 