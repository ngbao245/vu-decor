
import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';


const classes = cva('flex items-center rounded-md h-10 ', {
  variants: {
    variant: {
      primary: ' text-white px-10 linear-button',
      secondary: 'bg-white text-white bg-transparent'
    },
    size: {
      sm: 'h-10',
    },
    font: {
      sm: 'font-sm',
      md: 'font-md',
      lg: 'font-lg'
    },
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full'
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg'
    }
  }

})

export default function Button(
  props: {
    variant: 'primary' | 'secondary';
    size?: 'sm';
    font?: 'sm' | 'md' | 'lg';
    color?: 'white' | 'black';
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    shadow?: 'sm' | 'md' | 'lg';

  } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, className, size, font, color, rounded, shadow, ...otherProps } = props
  return (
    <button
      className={classes({
        variant,
        size,
        font,
        className,
      })}
      {...otherProps}
    />

  );
}