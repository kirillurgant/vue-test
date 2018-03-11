<template>
    <div class="b-form-field b-form-field_flex">
        <div class="b-form-field__title">
            {{ formField.title }}
            <v-popover v-if="formField.tooltip">
                <span class="b-tooltip">?</span>
                <template slot="popover">
                    <h3 class="popover-inner__title">{{ formField.tooltip.title }}</h3>
                    <div class="popover-inner__body">{{ formField.tooltip.body }}</div>
                </template>
            </v-popover>
        </div>
        <div class="b-form-field__input">
            <div class="b-radio">
                <input type="radio" class="b-radio__input"
                       :id="formField.input.options[0]"
                       :name="fieldType"
                       :value="formField.input.options[0]"
                       :checked="formField.input.value == formField.input.options[0]"
                       :disabled="disabled"
                       @change="changeFieldValue(formField.input.options[0])">
                <label class="b-radio__label" :for="formField.input.options[0]">
                    {{ formField.input.options[0] }}
                </label>
                <input type="radio" class="b-radio__input"
                       :id="formField.input.options[1]"
                       :name="fieldType"
                       :value="formField.input.options[1]"
                       :checked="formField.input.value == formField.input.options[1]"
                       :disabled="disabled"
                       @change="changeFieldValue(formField.input.options[1])">
                <label class="b-radio__label" :for="formField.input.options[1]">
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