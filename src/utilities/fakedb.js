// use local storage to manage cart data
const addToDb = id =>{
    let breakCart = {};

    //get the  cart from local storage
    const storedCart = localStorage.getItem('break-cart');
    if(storedCart){
        breakCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = breakCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        breakCart[id] = newQuantity;
    }
    else{
        breakCart[id] = 1;
    }
    localStorage.setItem('break-cart', JSON.stringify(breakCart));
}
const getStoredCart = () =>{
    let breakCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-cart');
    if(storedCart){
        breakCart = JSON.parse(storedCart);
    }
    return breakCart

}

// const removeFromDb = id =>{
//     const storedCart = localStorage.getItem('break-cart');
//     if(storedCart){
//         const breakCart = JSON.parse(storedCart);
//         if(id in breakCart){
//             delete breakCart[id];
//             localStorage.setItem('break-cart', JSON.stringify(breakCart));
//         }
//     }
// }

// const deletebreakCart = () =>{
//     localStorage.removeItem('break-cart');
// }

export {
    addToDb, 
    getStoredCart,
 
}