import type { Meta, StoryObj } from "@storybook/react-vite";

import { AspectRatio } from "@forthtilliath/shadcn-ui/components/aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "shadcn-ui/AspectRatio",
  component: AspectRatio,
  argTypes: {},
  render: (args) => (
    <AspectRatio {...args} className="bg-slate-50 dark:bg-slate-800 border">
      <img
        src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
        alt="Photo by Alvaro Pinot"
        className="rounded-md object-cover size-full"
      />
    </AspectRatio>
  ),
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the aspect ratio.
 */
export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
};

/**
 * Use the `1:1` aspect ratio to display a square image.
 */
export const Square: Story = {
  args: {
    ratio: 1,
  },
};

/**
 * Use the `4:3` aspect ratio to display a landscape image.
 */
export const Landscape: Story = {
  args: {
    ratio: 4 / 3,
  },
};

/**
 * Use the `2.35:1` aspect ratio to display a cinemascope image.
 */
export const Cinemascope: Story = {
  args: {
    ratio: 2.35 / 1,
  },
};
