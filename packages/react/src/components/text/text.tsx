import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import styles from './text.module.css'

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
  as?: React.ElementType
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    { asChild, as: Tag = 'p', size = 'md', weight = 'normal', align = 'left', className, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : Tag

    return (
      <Comp
        ref={ref}
        className={`${styles.text} ${styles[size]} ${styles[weight]} ${styles[align]} polaris-text ${className || ''}`.trim()}
        {...props}
      />
    )
  }
)

Text.displayName = 'Text'
