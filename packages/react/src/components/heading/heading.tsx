import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import styles from './heading.module.css'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, as: Tag = 'h2', className, ...props }, ref) => {
    const Comp = asChild ? Slot : Tag

    return (
      <Comp
        ref={ref}
        className={`${styles.heading} ${styles[Tag]} polaris-heading ${className || ''}`.trim()}
        {...props}
      />
    )
  }
)

Heading.displayName = 'Heading'
