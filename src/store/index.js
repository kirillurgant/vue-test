import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        formFields: {
            db: {
                title: 'База данных на',
                tooltip: 'Какой-то текст в тултипе',
                input: {
                    options: ['SQLite', 'SQL'],
                    value: 'SQL'
                }
            },
            ishop: {
                title: 'Нужен интернет-магазин',
                input: {
                    options: ['Нет', 'Да'],
                    value: 'Да',
                    disabled: false
                }
            },
            counter: {
                title: 'Рабочих мест',
                input: {
                    value: 1
                }
            }
        }
    },
    mutations: {
        changeFieldValue(state, n) {
            state.formFields[n.fieldType].input.value = n.value;

            if (n.disabled !== undefined) {
                state.formFields[n.fieldType].input.disabled = n.disabled;
            }
        }
    }
});

export default store;