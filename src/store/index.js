import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        formFields: {
            db: {
                title: 'База данных на',
                tooltip: {
                    title: 'Какой-то заголовк тултипа',
                    body: 'Какое-то тело тултипа.'
                },
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
            },
            service: {
                title: 'Что обслуживаем?',
                input: {
                    options: ['Autoинтеллект', 'Autoинтеллект и Веб-вход', 'Autoинтеллект и Веб-вход на вашем сервере'],
                    value: 'Autoинтеллект'
                }
            },
            tariff: {
                title: 'Выберите тариф',
                features: [
                    {
                        name: 'Обслуживание',
                        tooltip: {
                            title: 'Какой-то тултип про Обслуживание',
                            body: 'Какое-то тело тултипа про Обслуживание'
                        }
                    },
                    {
                        name: 'Веб-Инфо',
                        tooltip: {
                            title: 'Какой-то тултип про Веб-Инфо',
                            body: 'Какое-то тело тултипа про Веб-Инфо'
                        }
                    },
                    {
                        name: 'Веб-Аналоги',
                        tooltip: {
                            title: 'Какой-то тултип про Веб-Аналоги',
                            body: 'Какое-то тело тултипа про Веб-Аналоги'
                        }
                    },
                    {
                        name: 'Веб-проценка',
                        subname: 'всех поставщиков',
                        tooltip: {
                            title: 'Какой-то тултип про Веб-проценка',
                            body: 'Какое-то тело тултипа про Веб-проценка'
                        }
                    },
                    {
                        name: 'Веб-Заказ',
                        subname: 'всех поставщиков',
                        tooltip: {
                            title: 'Веб-заказ для всех поставщиков',
                            body: 'Сервис интеграции программного обеспечения с сайтом поставщика. С помощью него заказы ваших покупателей автоматически оформляются в корзине интернет-магазина поставщика.'
                        }
                    }
                ],
                input: {
                    options: [
                        {
                            name: 'Лайт',
                            features: [
                                'Обслуживание'
                            ],
                            price: 6500
                        },
                        {
                            name: 'Оптимальный',
                            features: [
                                'Обслуживание',
                                'Веб-Инфо',
                                'Веб-Аналоги',
                                'Веб-проценка'
                            ],
                            price: 9900
                        },
                        {
                            name: 'Про',
                            features: [
                                'Обслуживание',
                                'Веб-Инфо',
                                'Веб-Аналоги',
                                'Веб-Заказ'
                            ],
                            price: 14900
                        }
                    ],
                    value: 'Лайт'
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