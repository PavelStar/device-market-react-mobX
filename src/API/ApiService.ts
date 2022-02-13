import axios from "axios";

class ApiService {
	async getData() {
		const url: string = "https://mocki.io/v1/4ad914c0-6fdc-4d3f-9adb-f0757f304860";
		const res = await axios.get(url);
		return res.data;
	}
}

export default ApiService;
