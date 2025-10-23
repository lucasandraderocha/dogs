import styles from "./Label.module.css";
const Label = ({ children, ...props }) => {
  return (
    <label className={styles.label} {...props}>
      {children}
    </label>
  );
};

export default Label;
