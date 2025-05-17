
import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';


const classes = cva('rounded-md h-10 font-medium ', {
  variants: {
    variant: {
      primary: ' text-white px-10 linear-button',
      secondary: 'bg-white text-white bg-transparent'
    },
    size: {
      sm: 'h-10',
    }
  }
})

export default function Button(
  props: { 
    variant: 'primary' | 'secondary';
    size?: 'sm';
  } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const {variant, className, size, ...otherProps} = props
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
      
  );
}