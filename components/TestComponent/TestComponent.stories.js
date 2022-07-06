import TestComponent from './TestComponent';

export default {
    title: 'Test Component',
};

export const testComponent = (args, { argTypes }) => ({
    props: Object.keys(argTypes),

    components: { TestComponent },

    template: `
        <test-component v-model="page" />
    `,

    data() {
        return {
            page: 2,
        };
    },
});
