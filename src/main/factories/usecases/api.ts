

import {  IPlataforms, IPlans } from 'data/models'

 export class ApiService {

	private static getPlataforms = async (): Promise<IPlataforms[] | undefined> => {
		try {
			return await new Promise((resolve, reject) => {
				return fetch('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
					.then(res => res.json())
					.then(json => {
						try {
							resolve(json.plataformas)
						} catch (e) {
							console.warn(e)
						} 
					}).catch(e => e)
			})
			
		} catch (err) {
			return Promise.reject(err)
		}
	}

	private static getPlans = async (sku: string): Promise<IPlans[] |  undefined> => {
			try {
			return await new Promise((resolve, reject) => {
				return fetch(`http://private-59658d-celulardireto2017.apiary-mock.com/planos/${sku}`)
					.then(res => res.json())
					.then(json => {
						try {
							resolve(json.planos)
						} catch (e) {
							console.warn(e)
						} 
					}).catch(e => e)
			})
			
		} catch (err) {
			return Promise.reject(err)
		}
	}

	public static loadPlataforms = async (): Promise<IPlataforms[] | undefined> => {
		const data = await ApiService.getPlataforms()

		return data
	}

	public static loadPlans = async (sku: string): Promise<IPlans[]  | undefined> => {
		const data = await ApiService.getPlans(sku)

		return data

	}

}
