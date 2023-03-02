import './button.scss';

export const Button = ({ className, onClick, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
      {children}
    </button >
  );
}
export const OutlineButton = ({ className, onClick, children }) => {
  return (
    <Button className={`btn-outline ${className}`} onClick={onClick ? () => onClick() : null}>
      {children}
    </Button>
  );
}