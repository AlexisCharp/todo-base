import './button.css';

export const Button = ({ children, noPadding, type, variant }) => {
  const className = `${variant === 'danger' ? 'button--danger' : ''} ${
    noPadding ? 'button--no-padding' : ''
  }`;
  console.log(variant);

  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
