const state = {
    shoppings: [
        {
            id: 1,
            name: "Arroz",
            completed: false,
            description: "arroz branco",
            number: 2
        },
        {
            id: 2,
            name: "Feijão",
            completed: false,
            description: "feijão preto",
            number: 2
        },
        {
            id: 3,
            name: "Macarrão",
            completed: false,
            description: "furadinho e penne",
            number: 3
        }
    ]

}

const mutations = {

}

const actions = {

}
const getters = {
    shoppings: (state) => {
       return state.shoppings 
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}