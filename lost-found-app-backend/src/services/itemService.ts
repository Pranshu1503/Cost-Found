export class ItemService {
    private items: any[] = []; // This will hold the items in memory for simplicity

    addItem(item: any) {
        this.items.push(item);
        return item;
    }

    fetchItems() {
        return this.items;
    }

    fetchItemById(id: number) {
        return this.items.find(item => item.id === id);
    }

    modifyItem(id: number, updatedItem: any) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            return this.items[index];
        }
        return null;
    }

    removeItem(id: number) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return null;
    }
}