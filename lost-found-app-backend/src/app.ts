import express from 'express';
import bodyParser from 'body-parser';
import { setItemRoutes } from './routes/itemRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setItemRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});