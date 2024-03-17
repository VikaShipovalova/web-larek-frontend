export type ProductCategory = 'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';
export type PaymentMethod = 'онлайн' | 'при получении';

export interface IProduct {
    category: ProductCategory;
    name: string;
    price: number;
    description: string;
    image: URL;
}

export interface IProductList {
    item: IProduct[];
}

export interface IBasket {
    item: IProduct[];
    price: number;
}

export interface IOrderForm {
    payment: PaymentMethod;
    address: string;
    email: string;
    phone: string;
}

