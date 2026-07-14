import * as React from 'react'
import { Spinner } from '../spinner'

import styles from './button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral'

  isLoading?: boolean
  spinner?: React.ReactNode

  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      isLoading = false,
      spinner,
      startContent,
      endContent,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={[
          styles.button,
          styles[variant],
          styles[color],
          styles[size],
          isLoading && styles.loading,
          'polaris-button',
          className
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {isLoading && (
          <span className={styles.spinnerWrapper} aria-hidden="true">
            {spinner ?? <Spinner size="xs" />}
          </span>
        )}

        <span className={styles.content}>
          {startContent && <span className={styles.icon}>{startContent}</span>}

          <span className={styles.label}>{children}</span>

          {endContent && <span className={styles.icon}>{endContent}</span>}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'
