import React, { useState } from 'react';
import { uploadProductImage } from '../services/productService';

const ProductForm = () => {
	const [image, setImage] = useState(null);
	const [imagePath, setImagePath] = useState('');

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleImageUpload = async () => {
		if (image) {
			try {
				const response = await uploadProductImage(image);
				setImagePath(response.data);
				alert('Image uploaded successfully!');
			} catch (error) {
				alert('Failed to upload image.');
			}
		}
	};

	return (
		<div>
			<h2>Upload Product Image</h2>
			<input type="file" onChange={handleImageChange} />
			<button onClick={handleImageUpload}>Upload</button>
			{imagePath && <p>Uploaded Image Path: {imagePath}</p>}
		</div>
	);
};

export default ProductForm;
