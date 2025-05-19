import { Cart, IItem } from './cart';

describe('Cart', () => {
    let cart: Cart;
    let item1: IItem;
    let item2: IItem;

    beforeEach(() => {
        cart = new Cart();
        item1 = { id: 1, price: 100 };
        item2 = { id: 2, price: 150 };
    });

    it('should add an item to the cart', () => {
        cart.addItem(item1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(item1);
    });

    it('should calculate total cost without discount', () => {
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.totalCost()).toBe(250);
    });

    it('should calculate total cost with discount', () => {
        cart.addItem(item1);
        cart.addItem(item2);
        expect(cart.totalCostWithDiscount(0.1)).toBe(225);
    });

    it('should remove item by id', () => {
        cart.addItem(item1);
        cart.addItem(item2);
        cart.removeItemById(1);
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(item2);
    });
});