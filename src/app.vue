<template>
    <div id="app">
        <h1>{{ text }}</h1>
        <some_component></some_component>
    </div>
</template>

<script>
    import some_component from './components/some_component';

    export default {
        name: 'app',
        data () {
            return {
                text: 'some text there'
            }
        },
        components: {some_component}
    }
</script>