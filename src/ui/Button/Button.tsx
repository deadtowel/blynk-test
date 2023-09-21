import { useCallback } from 'react';

import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', type, ...restProps } = props;

  const getVariantClass = useCallback(() => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      default:
        return styles.primary;
    }
  }, [variant]);

  return (
    <button
      className={`${styles.button} ${getVariantClass()}`}
      type={type as 'button' | 'submit' | 'reset' | undefined}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
