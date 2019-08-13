import Vue from 'vue';
import { uid } from 'quasar';

const state = {
    shoppings: {
        'ID1': {
            id: 1,
            name: "Arroz",
            completed: false,
            description: "arroz branco",
            number: 2
        },
        'ID2': {

            id: 2,
            name: "Feijão",
            completed: false,
            description: "feijão preto",
            number: 2
        },
        'ID3': {
            id: 3,
            name: "Macarrão",
            completed: false,
            description: "furadinho e penne",
            number: 3

        }
    }

}

const mutations = {
    updateShopping(state, payload) {
        console.log('payload (from mutation): ', payload)
        Object.assign(state.shoppings[payload.id], payload.updates)
    },
    deleteShopping(state, id) {
        Vue.delete(state.shoppings, id)
    },
    addShopping(state, payload){
        Vue.set(state.shoppings, payload.id, payload.shopping)
    }
}

const actions = {
    updateShopping({ commit }, payload) {
        commit('updateShopping', payload)
    },
    deleteShopping({ commit }, id) {
        commit('deleteShopping', id)
    },
    addShopping({commit}, shopping){
        let shoppingId = uid();
        let payload = {
            id: shoppingId,
            shopping: shopping
        }
        commit('addShopping', payload);
    }
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