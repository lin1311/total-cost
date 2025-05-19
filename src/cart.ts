export interface IItem {
    id: number;
    price: number;
}

export class Cart {
    items: IItem[] = [];

    addItem(item: IItem): void {
        this.items.push(item);
    }

    totalCost(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    totalCostWithDiscount(discount: number): number {
        return this.items.reduce((total, item) => total + item.price * (1 - discount), 0);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
