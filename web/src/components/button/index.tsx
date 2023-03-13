
import React, { useState } from 'react';
import { ButtonStyles } from './styledComponent';

interface Props {
  label: string;
  onClick:()=>void;
}
const Button=({label,onClick}:Props)=> {
  return (
    <ButtonStyles>{label}</ButtonStyles>
  );
}

export default Button;