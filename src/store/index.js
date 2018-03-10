import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0,
        steps: [
            {

            }
        ]
    },
    mutations: {
        increment(state, n) {
            return n !== undefined ? state.counter = n : state.counter++
        },
        decrement(state, n) {
            return n !== undefined ? state.counter = n : state.counter--
        }
    },
    getters: {
        testGetter (state) {
            return (date) => state.counter + (new Date(date));
        }
    }
});

export default store;