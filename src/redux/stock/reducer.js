const initialState = {
    products: [
        {
            name: 'Quan Ao Dai Xanh Den',
            color: 'Xanh Den',
            category: 'Quan Ao Dai',
            imageURL: 'https://cdn.shopify.com/s/files/1/2592/4736/products/xanhden_1024x1024.jpg?v=1538555554',
        },
        {
            name: 'Quan Ao Dai Vang',
            color: 'Vang',
            category: 'Quan Ao Dai',
            imageURL: 'https://farm8.staticflickr.com/7117/7472625218_12c2b915d2_b.jpg',
        },
        {
            name: 'Ao Dai Tim Hue',
            color: 'Tim Hue',
            category: 'Ao Dai',
            imageURL: 'https://i.pinimg.com/736x/fb/88/ff/fb88ff905c7a8150a6b79ed8e1811c35.jpg',
        }
    ],
};

const stock = (state = initialState, action) => {
    return state;
};
export default stock;
