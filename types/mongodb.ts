export interface User {
    username: string;
    email: string;
    password: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
}

export interface Order {
    id: string;
    user: User;
    products: Product[];
    total: number;
}
