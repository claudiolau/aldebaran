import React from "react";
import { Footer } from "./Footer";
import { ComponentMeta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Footer",
  component: Footer,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>A basic footer geared for personal websites.</Subtitle>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Footer>;

export const Basic = () => (
  <Footer topic={["Home", "Github", "Blog", "Gear", "Contact", "Github"]} />
);
