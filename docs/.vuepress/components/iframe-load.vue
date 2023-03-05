<!-- @format -->

<template>
    <iframe
        class="iframe"
        :src="src"
        :style="{ height: height + 'px' }"
    ></iframe>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        src: {
            type: String,
            default: '',
        },
        height: {
            type: [Number, String],
            default: 300,
        },
    },
});
</script>
<style scoped>
.iframe {
    width: 100%;
    border: 0;
    outline: 0;
}
</style>
