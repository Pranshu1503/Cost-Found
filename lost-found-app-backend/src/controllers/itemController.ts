import { Request, Response } from 'express';
import { ItemService } from '../services/itemService';

class ItemController {
    private itemService: ItemService;

    constructor() {
        this.itemService = new ItemService();
    }

    public createItem = async (req: Request, res: Response): Promise<void> => {
        try {
            const itemData = req.body;
            const newItem = await this.itemService.addItem(itemData);
            res.status(201).json(newItem);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    public getItems = async (req: Request, res: Response): Promise<void> => {
        try {
            const items = await this.itemService.fetchItems();
            res.status(200).json(items);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    public getItemById = async (req: Request, res: Response): Promise<void> => {
        try {
            const itemId = req.params.id;
            const item = await this.itemService.fetchItemById(Number(itemId));
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    public updateItem = async (req: Request, res: Response): Promise<void> => {
        try {
            const itemId = req.params.id;
            const itemData = req.body;
            const updatedItem = await this.itemService.modifyItem(Number(itemId), itemData);
            if (updatedItem) {
                res.status(200).json(updatedItem);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };

    public deleteItem = async (req: Request, res: Response): Promise<void> => {
        try {
            const itemId = req.params.id;
            const deleted = await this.itemService.removeItem(Number(itemId));
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(500).json({ message: errorMessage });
        }
    };
}

export default ItemController;