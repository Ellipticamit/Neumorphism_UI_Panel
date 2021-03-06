import React, { useContext } from 'react';
import { ThemeContext } from '../../themecontext';

export const Button = ({ text }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={`btn btn--${theme}`} type='button'>
      {text}
    </button>
  );
};
