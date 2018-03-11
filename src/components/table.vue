<template>
    <div class="b-form-field">
        <table class="b-table">
            <tr class="b-table__tr">
                <td class="b-table__td b-table__td_text-align_left b-table__td_title">{{ formField.title }}</td>
                <td class="b-table__td" v-for="(option, index) in formField.input.options"
                    :class="index == checkedIndex ? 'b-table__td_bg_green' : ''">
                    <div class="b-radio-simple">
                        <input class="b-radio-simple__input" type="radio"
                               :id="option.name"
                               name="tariff"
                               :value="option.name"
                               :checked="formField.input.value == option.name"
                               @change="changeFieldValue(option.name)">
                        <label class="b-radio-simple__label b-radio-simple__label_small" :for="option.name">
                            {{ option.name }}
                        </label>
                    </div>
                </td>
            </tr>
            <tr class="b-table__tr" v-for="feature in formField.features">
                <td class="b-table__td b-table__td_text-align_left">
                    <span class="b-table__td-name">{{ feature.name }}</span>
                    <v-popover v-if="feature.tooltip">
                        <span class="b-tooltip">?</span>
                        <template slot="popover">
                            <h3 class="popover-inner__title">{{ feature.tooltip.title }}</h3>
                            <div class="popover-inner__body">{{ feature.tooltip.body }}</div>
                        </template>
                    </v-popover>
                    <br v-if="feature.subname">
                    <span v-if="feature.subname" class="b-table__td-subname">{{ feature.subname }}</span>
                </td>
                <td class="b-table__td b-table__td_big-green" v-for="(option, index) in formField.input.options"
                    :class="index == checkedIndex ? 'b-table__td_bg_green' : ''">
                    {{ featureIsAvailable(feature.name, option.features) }}
                </td>
            </tr>
            <tr class="b-table__tr">
                <td class="b-table__td b-table__td_border-bottom_none b-table__td_text-align_left b-table__td_big-gray">
                    Цена, руб./мес.
                </td>
                <td class="b-table__td b-table__td_border-bottom_none b-table__td_big-green"
                    v-for="(option, index) in formField.input.options"
                    :class="index == checkedIndex ? 'b-table__td_bg_green' : ''">
                    {{ formatPrice(option.price) }}
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
            },
            checkedIndex() {
                let arr = this.$store.state.formFields.tariff.input.options,
                    currentVal = this.$store.state.formFields.tariff.input.value

                for (let i = 0, max_i = arr.length; i < max_i; i++) {
                    if (currentVal === arr[i].name) return i;
                }
            }
        },
        methods: {
            featureIsAvailable(feature, optionFeatures) {
                for (let i = 0, max_i = optionFeatures.length; i < max_i; i++) {
                    if (optionFeatures[i] === feature) return '+';
                }
            },
            formatPrice(price, n, x) {
                let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
                return price.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$& ');
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