import './button.css';

export const Button = ({ children, noPadding, variant }) => {
  const className = `${variant === 'danger' ? 'button--danger' : ''} ${
    noPadding ? 'button--no-padding' : ''
  }`;
  console.log(variant);

  return <button className={className}>{children}</button>;
};
