import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface TextProps{
   text: string;
   to: string;
}

function ButtonGo(props: TextProps) {
   return(
      <Link to={props.to} className="enter-product">{props.text}</Link>
   );
}

export default ButtonGo;