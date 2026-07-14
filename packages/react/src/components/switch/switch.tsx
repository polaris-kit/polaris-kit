import * as React from 'react'
import styles from './switch.module.css'

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className={styles.switch}>
        <input
          type="checkbox"
          role="switch"
          aria-checked={props.checked}
          className={`${styles.input} polaris-switch ${className || ''}`.trim()}
          ref={ref}
          {...props}
        />
      </label>
    )
  }
)
Switch.displayName = 'Switch'
