import { Router } from 'express';
import ItemController from '../controllers/itemController';

const router = Router();
const itemController = new ItemController();

export function setItemRoutes(app) {
    app.use('/api/items', router);
    
    router.post('/', itemController.createItem.bind(itemController));
    router.get('/', itemController.getItems.bind(itemController));
    router.get('/:id', itemController.getItemById.bind(itemController));
    router.put('/:id', itemController.updateItem.bind(itemController));
    router.delete('/:id', itemController.deleteItem.bind(itemController));
}