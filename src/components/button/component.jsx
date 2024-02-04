import classNames from "classnames"
import styles from './style.module.scss'

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(className, styles.root)}>
      {children}
    </button>
  );
};

export default Button
