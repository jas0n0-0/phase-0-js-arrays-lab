let products = ["Laptop","Phone","Headphones","Monitor"]
function logFirstProduct(){
  console.log(products[0])
}
function addProduct(newProduct){
  products.push(newProduct)
}
function updateProductName(productPosition,newName){
  products[productPosition] = newName
}
function removeLastProduct(){
  products.pop()
}




module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
