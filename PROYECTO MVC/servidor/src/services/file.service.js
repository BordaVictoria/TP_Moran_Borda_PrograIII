import fs from "fs";
import path from "path";

export class FileService {
  static guardarImagen(file) {
    if (!file) return null;
    
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const nombreUnico = `${timestamp}${ext}`;
    
    const destino = path.join("servidor/src/uploads", nombreUnico);
    fs.renameSync(file.path, destino);
    
    return `/uploads/${nombreUnico}`;

  }
}