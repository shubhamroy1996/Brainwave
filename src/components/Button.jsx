import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

function Button({ className, href, onClick, children, px, white }) {
  
  const classes = `button relative inline-flex items-center justify-center h-12 transition-colors hover:text-color-1 ${px || 'px-7'}
  ${white ? 'text-n-8' : 'text-n-1'} ${className || ''} `;

  const spanClasses = "relative z-10"

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
    </a>
  )
  return href ? renderLink() : renderButton();
 

  /* return (
    <div>
      <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    </div> */
}

export default Button;
