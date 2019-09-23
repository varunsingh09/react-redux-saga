import {
	HOMEPAGE_BANNER, BLOGS_LIST
} from "./types/index";
import * as home from "./../data/service"

export const HomepageListing = (params) => {
	return async (dispatch) => {
		try {
			const response = await home.homepageListing(params)
			dispatch({
				type: HOMEPAGE_BANNER,
				paylod: response.data
			});
			return response;
		} catch (error) {
			console.log("Error ", error)
		}
	}
}


export function FetchBlogs(params) {
	return async (dispatch) => {

		await home.axiosGet(null, 'https://hn.algolia.com/api/v1/search?query=redux')
			.then(response => {
				dispatch(
					{
						type: BLOGS_LIST,
						paylod: response.data
					});
				return response
			})
			.catch(error => {
				throw (error);
			});
	};
}