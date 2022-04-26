import { Story, Meta } from '@storybook/web-components';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: true },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.play = async({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText(args.label));
  await expect(args.onClick).toHaveBeenCalled();
}