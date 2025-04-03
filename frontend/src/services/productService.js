import axios from 'axios';

const API_URL = '/api/products';

export const uploadProductImage = (file) => {
	const formData = new FormData();
	formData.append('file', file);
	return axios.post(`${API_URL}/upload`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};
