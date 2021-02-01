
export interface IPlans {
	sku: string 
	franquia: string 
	valor: string 
	ativo: boolean
	aparelho?: Device
}


export interface Device {
	nome: string,
	valor: string,
	numeroParcelas: number,
  valorParcela: boolean | String
}
