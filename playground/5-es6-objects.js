const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
};

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
};

const { label: productLabel, stock, rating = 5 } = product;

const transaction = (type, { label, price, stock, salePrice, rating }) => {
    console.log(productLabel, stock, rating);
};

transaction('order', product);
