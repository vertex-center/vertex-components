import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField.tsx";

const meta: Meta<typeof TextField> = {
    title: "Components/Text Field",
    component: TextField,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof TextField>;

export const Normal: Story = {
    args: {
        label: "Label",
    },
    render: (props) => <TextField {...props} />,
};

export default meta;