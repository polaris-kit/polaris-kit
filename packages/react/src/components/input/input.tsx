import * as React from 'react'
import styles from './input.module.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`${styles.input} polaris-input ${className || ''}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
