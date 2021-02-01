import {  IPlans } from 'data/models'

import { 	IUserAction } from 'data/actions'

export const checkout = (state: IPlans | null = null, action: IUserAction): IPlans | null => {
	switch (action.type) {
		case 'User.Checkout':
			return {
				...action.checkout
			}
		
		case 'User.CheckoutNull':
			return null

		default:
			return state
	}
}