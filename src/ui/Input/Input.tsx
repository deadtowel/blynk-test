import styles from './Input.module.css';

type InputProps = {} & React.HTMLProps<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  const {className, ...restProps} = props

  return <input className={`${styles.input} ${className}`} type='text' {...restProps} />;
};

export default Input;
