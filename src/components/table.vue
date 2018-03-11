<template>
    <div class="b-form-field">
        <table>
            <tr>
                <td>{{ formField.title }}</td>
                <td v-for="option in formField.input.options">
                    <input type="radio"
                           :id="option.name"
                           name="tariff"
                           :value="option.name"
                           :checked="formField.input.value == option.name"
                           @change="changeFieldValue(option.name)">
                    <label :for="option.name">
                        {{ option.name }}
                    </label>
                </td>
            </tr>
            <tr v-for="feature in formField.features">
                <td>
                    {{ feature.name }}
                    <v-popover v-if="feature.tooltip">
                        <span class="b-tooltip">?</span>
                        <template slot="popover">
                            <h3 class="popover-inner__title">{{ feature.tooltip.title }}</h3>
                            <div class="popover-inner__body">{{ feature.tooltip.body }}</div>
                        </template>
                    </v-popover>
                </td>
                <td v-for="option in formField.input.options">
                    {{ featureIsAvailable(feature.name, option.features) }}
                </td>
            </tr>
            <tr>
                <td>Цена, руб./мес.</td>
                <td v-for="option in formField.input.options">
                    {{ option.price }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            formField() {
                return this.$store.state.formFields.tariff;
            }
        },
        methods: {
            featureIsAvailable(feature, optionFeatures) {
                for (let i = 0, max_i = optionFeatures.length; i < max_i; i++) {
                    if (optionFeatures[i] === feature) return '+';
                }
            },
            changeFieldValue(value) {
                this.$store.commit('changeFieldValue', {
                    fieldType: 'tariff',
                    value: value
                })
            }
        }
    }
</script>