import * as React from "react";
import styles from "./_footer.module.scss";

type FooterProps<T> = {
  topic: T[];
};

export const Footer: React.FC<FooterProps<String>> = ({ topic }) => {
  return (
    <>
      <div className={styles.footer}>
        {topic.map((item, index) => (
          <div key={index}>
            <a href={`${item}`}>{item}</a>
          </div>
        ))}
      </div>
    </>
  );
};
