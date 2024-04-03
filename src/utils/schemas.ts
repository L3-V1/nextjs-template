import * as yup from 'yup'

yup.setLocale({
    mixed: {
        required(params) {
            return `${params.path} é obrigatório(a).`
        },

        notType(params) {
            return `${params.path} inválido(a).`
        },

        notOneOf(params) {
            return `${params.path} inválido(a).`
        }
    }
})