<template>
    <div id="app">
        <h1>{{ text }}</h1>
        <step></step>
    </div>
</template>

<script>
    import store from './store/index';
    import step from './components/step';

    export default {
        name: 'app',
        data() {
            return {
                text: 'some text there'
            }
        },
        components: {step},
        store
    }
</script>