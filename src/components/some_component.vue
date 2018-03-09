<template>
    <ul>
        <li v-for="item in list">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                list: [
                    'qwe',
                    'asd',
                    'zxc',
                    'vbn'
                ]
            }
        }
    }
</script>