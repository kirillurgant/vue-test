<template>
    <div>
        <p>{{ counter }}</p>
        <p>{{ testGetter }}</p>
        <button @click="dec">-</button>
        <button @click="inc">+</button>
        <input type="text" v-model="userCounter" @keyup.enter="setCounter">
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        data () {
            return {
                title: {
                    stepName: 'Шаг 1',
                    stepText: 'Вводные данные'
                },
                userCounter: 0
            }
        },
        computed: {
            ...mapState(['counter']),
            testGetter() {
                return this.$store.getters.testGetter('2011-10-3')
            }
        },
        methods: {
            inc() {
                this.$store.commit('increment')
            },
            dec() {
                this.$store.commit('decrement')
            },
            setCounter() {
                this.$store.commit('increment', this.userCounter)
            }
        }
    }
</script>