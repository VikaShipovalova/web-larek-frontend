export type ProductCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил'
	| string;
export type PaymentMethod = 'онлайн' | 'при получении' | string;

//интерфейс для товаров
export interface IProduct {
	id: string;
	category: ProductCategory;
	title: string;
	price: number;
	description: string;
	image: string;
}

export interface IProductList {
	item: IProduct[];
}

export interface IBasket {
	item: IProduct[];
	price: number;
}
//данные о пользователе
export interface IDeliveryForm {
	payment?: PaymentMethod;
	address?: string;
	email?: string;
	phone?: string;
}

// итоговые данные корзины
export interface IOrder extends IDeliveryForm {
	total: number;
	items: string[];
}

// итоговый счет
export interface IOrderTotal {
	id: string;
	total: number;
}

// Отображение карточки
export interface ICard extends IProduct {
	index?: string;
	buttonTitle?: string;
}

// Отображение корзины
export interface IBasket {
	items: HTMLElement[];
	total: number;
}

// Состояние приложения
export interface IAppState {
	catalog: IProduct[];
	basket: IProduct[];
	preview: string | null;
	contact: IDeliveryForm | null;
	order: IOrder | null;
}

// Ошибки в формах
export type FormErrors = Partial<Record<keyof IOrder, string>>;

// Действия передаваемые в конструктор
export interface IActions {
	onClick: (event: MouseEvent) => void;
}
