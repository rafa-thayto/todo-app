import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Conhecer a 10/10',
            done: true
        }, {
            _id: 2,
            description: 'Conseguir o curso da estação hack do facebook',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médica na terça depois do almoço',
            done: false
        }]
    })
})

export default rootReducer;
