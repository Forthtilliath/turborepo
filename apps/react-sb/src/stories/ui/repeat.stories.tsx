import type { Meta, StoryObj } from "@storybook/react-vite";

import { Repeat, type RepeatProps } from "@forthtilliath/react-ui/repeat";

const meta: Meta<typeof Repeat> = {
  title: "Ui/Repeat",
  component: Repeat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "range", options: [1, 2, 3, 5, 10] },
  },
  render: ({ count, children }: RepeatProps) => (
    <Repeat count={count}>{children}</Repeat>
  ),
};

export default meta;
type Story = StoryObj<typeof Repeat>;

export const Default: Story = {
  args: {
    count: 3,
    children: <p>Message statique répété plusieurs fois</p>,
  },
};

export const WithCallback: Story = {
  args: {
    count: 3,
    children: (i: number) => (
      <p>Message dynamique répété plusieurs fois, index {i}</p>
    ),
  },
};
