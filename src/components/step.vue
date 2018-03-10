<template>
    <div class="b-step">
        <h2 class="b-step__header">{{ stepNumber }}&nbsp;
            <span class="b-step__header b-step__header_name">{{ stepName }}</span>
        </h2>
        <p class="b-step__description">{{ stepDescription }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['stepNumber', 'stepName', 'stepDescription']
    }
</script>