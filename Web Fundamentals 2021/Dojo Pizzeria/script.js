function pizzaOven(style, sauce, cheese, toppings) {
    var pizza = {};
    pizza.style = style;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizzas = [];
pizzas.push(pizzaOven("deep dish", "traditional", ["mozzaarella"], ["pepporoni", "sausage"]));
pizzas.push(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]));
pizzas.push(pizzaOven("none", "none", "none", "left-beef"));
pizzas.push(pizzaOven("thin crust", "spicy marinara", "mozzarella", "mushrooms"));

function randomPizza() {
    var pizza = {};
    pizza.style = pizzas[Math.floor(Math.random() * pizzas.length)].style;
    pizza.sauce = pizzas[Math.floor(Math.random() * pizzas.length)].sauce;
    pizza.cheese = pizzas[Math.floor(Math.random() * pizzas.length)].cheese;
    pizza.toppings = pizzas[Math.floor(Math.random() * pizzas.length)].toppings;
    return pizza;
}

console.log(randomPizza());