<template>
    <div class="b-form-field">
        <div class="b-form-field__title b-form-field__title_bold">{{ formField.title }}</div>
        <div class="b-form-field__input">
            <ul class="b-radio-list">
                <li class="b-radio-simple" v-for="item in formField.input.options">
                    <input class="b-radio-simple__input" type="radio"
                           :id="item"
                           name="service"
                           :value="item"
                           :checked="formField.input.value == item"
                           @change="changeFieldValue(item)">
                    <label class="b-radio-simple__label" :for="item">
                        {{ item }}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            formField() {
                return this.$store.state.formFields.service;
            }
        },
        methods: {
            changeFieldValue(value) {
                this.$store.commit('changeFieldValue', {
                    fieldType: 'service',
                    value: value
                })
            }
        }
    }
</script>