<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div class="b-wrapper">
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
                                <div class="b-form__item b-form__item_gift">
                                    <span class="b-form__icon"></span>8 часов обучения в подарок!
                                </div>
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
                            <div class="b-form__item b-form__item_border">
                                <table_component></table_component>
                            </div>
                        </form>
                    </step>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from './store/index';
    import step from './components/step';
    import radio from './components/radio';
    import counter from './components/counter';
    import radio_list from './components/radio_list';
    import table_component from './components/table';

    export default {
        name: 'app',
        components: {step, radio, counter, radio_list, table_component},
        store
    }
</script>