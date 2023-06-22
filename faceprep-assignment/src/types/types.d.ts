export interface CardProps {
    name: string,
    time: string,
    offer: string,
    href: string,
    category: string,
    rating: string | number
}

export interface ProductsInitialState {
    products: CardProps[],
    visibleProducts: CardProps[],
    isLoading: boolean
}

