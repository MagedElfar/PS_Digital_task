export interface Category {
    ID: number,
    Name: string, 
    ImagePath: string,
    DisplayOrder: number
}

export interface Ingredients extends Category{
    Price: number,
    Quantity: number
}

export interface Product extends Category{
    DefaultPrice: number,
    Description: string,
    Ingridents: Ingredients []
}

export interface FooterMenu {
    title: string,
    menu: string[]
}

export interface CartItem {
    productId: number,
    name: string,
    price: number,
    image: string,
    quantity: number
}


export interface Cart {
    id: string | null;
    products: CartItem []
}

export interface CartSlice{
    isLoading: boolean,
    cart: Cart,
    total: number
}

//action
export interface Action {
    type:string,
    payload?: any
}