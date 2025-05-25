
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
    }
  }
})

export default function Button(
  props: {
    variant: 'primary' | 'secondary';
    size?: 'sm';
    font?: 'sm' | 'md' | 'lg';
  } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, className, size, font, ...otherProps } = props
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