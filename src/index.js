import express from "express";
import morgan from "morgan";
import router from "./router/product.routes.js";
import routerCategory from "./router/category.routes.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', router);
app.use('/api', routerCategory);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
