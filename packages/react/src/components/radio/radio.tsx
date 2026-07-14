import * as React from 'react'
import styles from './radio.module.css'

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={`${styles.radio} polaris-radio ${className || ''}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)
Radio.displayName = 'Radio'
