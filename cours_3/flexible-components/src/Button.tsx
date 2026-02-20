type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    mode?: 'filled' | 'outline' | 'text';
    Icon?: React.ComponentType<{ className?: string }>;
}


export default function Button({ children, className, mode = 'filled', Icon, ...props}: ButtonProps) {
// On construit la class pour le CSS au fur et a mesure
  let cssClasses = `button ${mode}-button`;
 
  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}