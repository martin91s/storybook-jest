<template>
    <div class="test-component">
        {{ page }} test component
    </div>
</template>

<script>
    export default {
        name: 'test-component',

        props: {
            value: {
                type: Number,
                default: 0,
            },
        },

        computed: {
            page: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                },
            },
        },
    };
</script>
