import React from "react";
import { Paragraph } from "./Paragraph";
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
import { Footer } from "../Footer/Footer";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Paragraph",
  component: Paragraph,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>
            A basic paragraph format geared for personal websites.
          </Subtitle>
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Paragraph>;

export const Basic = () => (
  <>
  <Paragraph
    summary={[
      { id: "first", detail: "What is Lorem Ipsum" },
      {
        id: "second",
        detail:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ]}  
  />
  </>
);
