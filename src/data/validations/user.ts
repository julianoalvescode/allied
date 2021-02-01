import { differenceInYears } from 'date-fns'
import * as yup from 'yup'

import 'yup-phone'

export const formHidePlan = yup.object().shape({
	name: yup.string().required('Campo obrigatório'),
	email: yup.string().email('Informe um e-mail válido.').required('Campo obrigatório'),
	birthDate: yup.string().test(
			'DOB',
			'Você precisa ser maior de 18 anos.',
			(value) => {
				return (
					differenceInYears(new Date(), new Date(value as string)) >=
					18
				)
			}
		).required('Campo obrigatório'),
	phone: yup.string().phone('BR', true, 'Informe um número válido').required('Campo obrigatório'),
	cpf: yup.string().required('Campo obrigatório')
})