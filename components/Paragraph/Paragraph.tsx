import * as React from "react";
import styles from "./_paragraph.module.scss";

type topic = {
  id: string;
  detail: string;
};

type ParagraphProps = {
  summary: topic[];
};

export const Paragraph: React.FC<ParagraphProps> = ({ summary }) => {
  return (
    <>
      {summary.map((i) => (
        <div className={styles.paragraph}>
          <span key={i.id} className={styles.span}>
            {i.detail}
          </span>
        </div>
      ))}
    </>
  );
};
