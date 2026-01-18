import axios from "axios";
const BaseUrl = "https://api.llama.fi";
const YieldUrl = "https://yields.llama.fi";

const AxiosInstanceBase = axios.create({
	baseURL: BaseUrl,
});

const AxiosInstanceYield = axios.create({
	baseURL: YieldUrl,
});

export { AxiosInstanceBase, AxiosInstanceYield, BaseUrl, YieldUrl };
