let arr = [1,2,3,4,5,6,7,8,9]
let sumarr = arr.reduce((acc,cur) => acc+cur,0)
console.log(sumarr);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);