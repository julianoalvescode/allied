
import { IPlans } from 'data/models'
export declare enum UserActionTypes {
    Checkout = "User.Checkout",

    Null = 'User.CheckoutNull',
}
export interface IUserCheckoutAction {
    type: UserActionTypes.Checkout;
    checkout: IPlans;
}

export interface IUserCheckoutNullAction {
    type: UserActionTypes.Null;
}

export declare type IUserAction = IUserCheckoutAction  | IUserCheckoutNullAction
