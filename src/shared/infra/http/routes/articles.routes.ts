import { Router } from "express";
import { CreateArticlesController } from "../../../../modules/articles/useCases/create/createArticlesController";
import { DeleteArticlesController } from "../../../../modules/articles/useCases/delete/deleteArticlesController";
import { ListArticlesController } from "../../../../modules/articles/useCases/list/listArticlesController";
import { UpdateArticlesController } from "../../../../modules/articles/useCases/update/updateArticlesController";

const articlesRoutes = Router();
const createArticlesController = new CreateArticlesController();
const listArticlesController = new ListArticlesController();
const updateArticlesController = new UpdateArticlesController();
const deleteArticlesController = new DeleteArticlesController();

articlesRoutes.get("/", listArticlesController.handle);
articlesRoutes.post("/", createArticlesController.handle);
articlesRoutes.put("/:id", updateArticlesController.handle);
articlesRoutes.delete("/:id", deleteArticlesController.handle);

export { articlesRoutes }