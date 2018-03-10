<template>
    <div class="b-form-field">
        <div class="b-form-field__title">{{ formField.title }}</div>
        <div class="b-form-field__input">
            <div class="b-radio">
                <input type="radio"
                       :id="formField.input.options[0]"
                       :name="fieldType"
                       :value="formField.input.options[0]"
                       :checked="formField.input.value == formField.input.options[0]"
                       :disabled="disabled"
                       @change="changeFieldValue(formField.input.options[0])">
                <label :for="formField.input.options[0]">
                    {{ formField.input.options[0] }}
                </label>
                <input type="radio"
                       :id="formField.input.options[1]"
                       :name="fieldType"
                       :value="formField.input.options[1]"
                       :checked="formField.input.value == formField.input.options[1]"
                       :disabled="disabled"
                       @change="changeFieldValue(formField.input.options[1])">
                <label :for="formField.input.options[1]">
                    {{ formField.input.options[1] }}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['fieldType'],
        computed: {
            formField() {
                return this.$store.state.formFields[this.fieldType];
            },
            disabled() {
                let disabled = this.$store.state.formFields[this.fieldType].input.disabled;

                return disabled !== undefined ? disabled : false;
            }
        },
        methods: {
            changeFieldValue(value) {
                if (this.fieldType === 'db') {
                    if (value === 'SQLite') {
                        this.$store.commit('changeFieldValue', {
                            fieldType: 'ishop',
                            value: 'Нет',
                            disabled: true
                        })
                    } else {
                        this.$store.commit('changeFieldValue', {
                            fieldType: 'ishop',
                            value: 'Нет',
                            disabled: false
                        })
                    }
                }

                this.$store.commit('changeFieldValue', {
                    fieldType: this.fieldType,
                    value: value
                })
            }
        }
    }
</script>