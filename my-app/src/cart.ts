import { writable, get } from 'svelte/store';

export const cartItems = writable<CartItem[]>([]);

// add to cart items
export const addToCart = (id: string) => {
	// cart items is a writeable, not a value

	// get(cartItems) -> [{id,quantity}]
	let [items, itemPosition, itemExists] = findItemInCart(id);

	if (itemExists) {
		// Item is already in cart, add to the quantity of that item
		cartItems.update(() => {
			// items: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
			// updatedItems: [{ id: "1", quantity: 7 }, { id: "2", quantity: 3 } ]
			let updatedItems = items.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});

			return updatedItems;
		});
	} else {
		// Item is not in the cart at all, so add the object to the cart
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	}
};
// remove from cart items

export const removeFromCart = (id: string) => {
	let [items, itemPosition] = findItemInCart(id);

	// [ {id: "1", quantity: 1} ]
	if (items[itemPosition]?.quantity - 1 === 0) {
		items.splice(itemPosition, 1);
	}
	// [ ]

	cartItems.update(() => {
		// items: [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
		// updatedItems: [{ id: "1", quantity: 5 }, { id: "2", quantity: 3 } ]
		let updatedItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		});

		return updatedItems;
	});
};

const findItemInCart = (id: string) => {
	let items = get(cartItems);
	let itemPosition = items.findIndex((item) => {
		return item.id === id;
	});
	let itemExists = itemPosition !== -1;
	return [items, itemPosition, itemExists];
};
