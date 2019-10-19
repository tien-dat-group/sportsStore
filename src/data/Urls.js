import { dataType } from './Type';

//const protocol = "http";
//const hostname = "localhost";
//const port = 3500;

export const RestUrls = {
	[dataType.CATEGORIES]: `/api/categories`,
	[dataType.PRODUCTS]: `/api/products`,
	[dataType.ORDERS]: `/api/orders`
}

export const GraphQlUrl = `/graphql`;
export const authUrl = `/login`;
