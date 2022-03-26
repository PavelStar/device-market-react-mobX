// import axios from "axios";
//
// class ApiService {
// 	async getData() {
// 		const url: string = "https://mocki.io/v1/bdaf9955-431c-4693-9713-7f994530868a";
// 		const res = await axios.get(url);
// 		return res.data;
// 	}
// }
//
// export default ApiService;

import axios from "axios";
import { IItemData } from "../interfaces/IItemData";
import { IResponseData } from "../interfaces/IResponseData";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/a1868180-14dc-41e1-a1ff-3eb09b4d6702";
		const res = await axios.get(url);
		const resData: IResponseData = res.data;
		return resData;
	}
}

export default ApiService;
