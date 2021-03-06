import { useContext } from 'react';
import { ThemeContext } from '../../themecontext';

export const Box = (props) => {
  const { children, styles, classname } = props;
  const context = useContext(ThemeContext);

  return (
    <div className={`box ${classname} box--${context.theme}`} style={styles}>
      {children}
    </div>
  );
};
