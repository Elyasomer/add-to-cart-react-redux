const initval = {
    products: [
    ],
}
const reducer = (state = initval, action) => {
    switch (action.type) {
        case 'ADD':
            const newProducts = [...state.products, action.product]
            return {
              products: newProducts
            }

        case 'REMOVE':
            let filteredProds = state.products.filter(filteredProds => {
            return action.id !== filteredProds.id
           })
            return {
              products: filteredProds
            }
        }

    return state
}
export default reducer
