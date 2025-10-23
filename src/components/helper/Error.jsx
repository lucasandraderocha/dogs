import styles from "./Error.module.css";

const Error = ({ error, ...props }) => {
  if (!error) return null;

  return (
    <>
      <p className={styles.error} {...props}>
        {error}
      </p>
    </>
  );
};

export default Error;
