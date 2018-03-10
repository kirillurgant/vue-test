<template>
    <div id="app" class="b-wrapper">
        <step step-number="Шаг 1"
              step-name="Вводные данные"
              step-description="Выберите необходимые параметры: язык программирования баз данных и количество рабочих мест">
            <form class="b-form">
                <div class="b-form__item">
                    <radio field-type="db"></radio>
                </div>
                <div class="b-form__item">
                    <radio field-type="ishop"></radio>
                </div>
                <div class="b-form__item">
                    <counter></counter>
                </div>
                <div class="b-form__item b-form__item_green b-form__item_center">
                    <div class="b-form__item-label b-form__item-label_green">
                        <img src="dist/images/gift.svg" alt="gift"> 8 часов обучения в подарок!</div>
                </div>
            </form>
        </step>
        <hr class="b-hr">
        <step step-number="Шаг 2"
              step-name="Обслуживание"
              step-description="Выберите подходящий тип обслуживания системы «AutoИнтеллект», исходя из используемого функционала">
            <form class="b-form">
                <div class="b-form__item">
                    <radio_list></radio_list>
                </div>
                <div class="b-form__item"></div>
            </form>
        </step>
    </div>
</template>

<script>
    import store from './store/index';
    import step from './components/step';
    import radio from './components/radio';
    import counter from './components/counter';
    import radio_list from './components/radio_list';

    export default {
        name: 'app',
        components: {step, radio, counter, radio_list},
        store
    }
</script>