import './button.css';

export const Button = ({ children, noPadding, type, variant, onClick }) => {
  const className = `${variant === 'danger' ? 'button--danger' : ''} ${
    noPadding ? 'button--no-padding' : ''
  }`;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
