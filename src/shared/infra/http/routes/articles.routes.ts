import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateArticlesController } from "../../../../modules/articles/useCases/create/createArticlesController";
import { DeleteArticlesController } from "../../../../modules/articles/useCases/delete/deleteArticlesController";
import { GetArticlesController } from "../../../../modules/articles/useCases/get/getArticlesController";
import { GetOneArticlesController } from "../../../../modules/articles/useCases/getOne/getOneArticlesController";
import { UpdateArticlesController } from "../../../../modules/articles/useCases/update/updateArticlesController";
import { UploadArticlesImagesController } from "../../../../modules/articles/useCases/uploadArticlesImages/uploadArticlesImagesController";

const articlesRoutes = Router();
const uploadImage = multer(uploadConfig);

const getArticlesController = new GetArticlesController();
const getOneArticlesController = new GetOneArticlesController();
const createArticlesController = new CreateArticlesController();
const updateArticlesController = new UpdateArticlesController();
const uploadArticlesImagesController = new UploadArticlesImagesController();
const deleteArticlesController = new DeleteArticlesController();

articlesRoutes.get("/", getArticlesController.handle);
articlesRoutes.get("/:id", getOneArticlesController.handle);
articlesRoutes.post("/", createArticlesController.handle);
articlesRoutes.put("/:id", updateArticlesController.handle);
articlesRoutes.patch("/imageUrl/:id", uploadImage.single("imageUrl"), uploadArticlesImagesController.handle);
articlesRoutes.delete("/:id", deleteArticlesController.handle);

export { articlesRoutes }