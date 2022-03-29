import axios from "axios";

export const addUserToDB = async (email: string, password: string) => {
	try {
		const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
			email,
			password,
		});
		alert(response.data.message);
		console.log(response.data);
	} catch (e: any) {
		alert(e.response.data.message);
		console.log(e.message);
	}
};
