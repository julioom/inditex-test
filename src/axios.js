import axios from "axios";

const instance = axios.create({
	baseURL: "https://front-test-api.herokuapp.com/",
});
// We can add some custom config

export default instance;
