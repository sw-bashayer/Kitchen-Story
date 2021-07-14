import { IFood } from './../home/IFood';
export interface ICustomer_order {
    name: string,
    address: string,
    totalprice: number,
    paymentType: string,
    orderlist: IFood[]
}