import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([]);

// add to cart items
export const addToCart = (id: string) => {
	// cart items is a writeable, not a value

	// get(cartItems) -> [{id,quantity}]
    let [items, itemPosition] = findItemInCart(id)
    
	if (itemPosition !== -1) {
		// if item already in cart, add to quantity
		cartItems.update(() => {
			let updatedItems = items.map((item) => {
				if (item.id === id) {
					return { ...items, quantity: item.quantity++ };
				}
				return item;
			});
			return updatedItems;
		});
	} else {
		// init add item if not in cart
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	}
};
// remove from cart items

export const removeFromCart = (id: string) => {
    let [items, itemPosition] = findItemInCart(id)
};

const findItemInCart = (id: string) =>{
    let items = get(cartItems);
	let itemPosition = items.findIndex((item) => {
		return item.id === id;
	});
    return[items, itemPosition]
}
