<template>
    <div class="b-form-field b-form-field_flex">
        <div class="b-form-field__title">{{ formField.title }}</div>
        <div class="b-form-field__input">
            <div class="b-counter">
                <span class="b-counter__button" @click="dec"></span>
                <div class="b-counter__count">
                    {{ formField.input.value }}
                </div>
                <span class="b-counter__button b-counter__button_inc" @click="inc"></span>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * Inc/dev value not less than 1
     * @param {Number} val
     * @param {Boolean} op - if true then inc else dec
     * @returns {Number}
     */
    function count(val, op) {
        op ? ++val : --val;

        return val > 0 ? val : 1;
    }

    export default {
        computed: {
            formField() {
                return this.$store.state.formFields.counter;
            }
        },
        methods: {
            inc(e) {
                e.preventDefault();

                this.$store.commit('changeFieldValue', {
                    fieldType: 'counter',
                    value: count(this.$store.state.formFields.counter.input.value, true)
                })
            },
            dec(e) {
                e.preventDefault();

                this.$store.commit('changeFieldValue', {
                    fieldType: 'counter',
                    value: count(this.$store.state.formFields.counter.input.value)
                })
            }
        }
    }
</script>