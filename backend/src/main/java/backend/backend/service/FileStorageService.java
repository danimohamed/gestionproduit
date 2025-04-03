package backend.backend.service;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileStorageService {

	@Value("${file.upload-dir}")
	private String uploadDir;

	public String storeFile(MultipartFile file) {
		try {
			String fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());
			String fileName = UUID.randomUUID().toString() + "." + fileExtension;
			Path targetLocation = Paths.get(uploadDir).resolve(fileName);
			Files.copy(file.getInputStream(), targetLocation);
			return fileName;
		} catch (IOException ex) {
			throw new RuntimeException("Could not store file. Please try again!", ex);
		}
	}
}
