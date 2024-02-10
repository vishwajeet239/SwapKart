package com.app.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.entities.Product;

public interface ProductService {
	List<Product> getProductsByUserId(Integer userId);

	Product getProductById(Integer productId);

	Product saveProduct(String productJson, MultipartFile firstImage, MultipartFile secondImage,
			MultipartFile thirdImage);

	Product updateProduct(Integer productId, String productJson, MultipartFile firstImage, MultipartFile secondImage,
			MultipartFile thirdImage);

	ApiResponse deleteProduct(Integer productId);
}
