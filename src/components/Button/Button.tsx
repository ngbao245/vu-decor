
import { cva } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';


const classes = cva('flex items-center w-max py-3 px-5 hover:scale-105 active:scale-95', {
  variants: {
    variant: {
      primary: ' text-white px-10 linear-button',
      secondary: 'bg-white bg-transparent'

    },
    size: {
      sm: 'h-10',
    },
    weight: {
      xs: 'font-light',
      sm: 'font-normal',
      md: 'font-medium',
      lg: 'font-semibold',
      xl: 'font-bold'
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
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
    weight: 'sm',
    color: 'white',
    rounded: 'sm',
    shadow: 'sm'
  }
})

export default function Button(
  props: {
    variant?: 'primary' | 'secondary';
    size?: 'sm';
    weight?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'white' | 'black';
    rounded?: 'sm' | 'md' | 'lg' | 'full';
    shadow?: 'sm' | 'md' | 'lg';
  } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { variant, className, size, weight, color, rounded, shadow, ...otherProps } = props
  return (
    <button
      className={classes({
        variant,
        size,
        weight,
        color,
        rounded,
        shadow,
        className,
      })}
      {...otherProps}
    />

  );
}