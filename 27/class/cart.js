
// Создать объект - корзину интернет магазина, который может:
const cart = {
  items: [],
  
  // - создавать элементы в корзине
  addItem(item) {
    this.items.push(item);
  },
  
  // - удалять элемент из корзины
  removeItem(item) {
    const index = this.items
      .findIndex((value) => value === item)
    
    if (index === -1) {
      return;
    }
    
    this.items.splice(index, 1);
  },
  
  // - вернуть количество всего элементов
  itemsCount() {
    return this.items.length;
  }
}

new CartItem('айфон', 100);


class CartItem {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}