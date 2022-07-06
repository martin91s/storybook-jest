import { mount } from '@vue/test-utils';
import { composeStories } from '@storybook/testing-vue';
import * as stories from './TestComponent.stories';

const { testComponent } = composeStories(stories);

describe('TestComponent', () => {
    test('Page number is set', () => {
        const wrapper = mount(testComponent());
        console.log(wrapper.html());
        console.log(wrapper.vm.page);
    });
});
