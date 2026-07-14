import * as React from 'react'
import styles from './textarea.module.css'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`${styles.textarea} polaris-textarea ${className || ''}`.trim()}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'
