import React from "react";
import { Navbar } from "./Navbar";
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
  title: "Navbar",
  component: Navbar,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            A basic navigation bar geared for personal websites.
          </Subtitle>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Navbar>;

export const Basic = () => (
  <Navbar navtitle={["Home", "Github", "Blog", "Gear"]} />
);
