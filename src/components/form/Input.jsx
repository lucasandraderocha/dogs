import Error from "../helper/Error";
import styles from "./Input.module.css";
const Input = ({ error, ...props }) => {
  return (
    <>
      <input className={styles.input} {...props} />
      <Error error={error} />
    </>
  );
};

export default Input;
