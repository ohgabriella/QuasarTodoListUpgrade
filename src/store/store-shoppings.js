import Vue from 'vue';
import { uid } from 'quasar';

const state = {
    shoppings: {
    
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