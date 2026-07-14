import * as React from 'react'
import styles from './icon.module.css'

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg'
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', className, children, viewBox = '0 0 24 24', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={`${styles.icon} ${styles[size]} polaris-icon ${className || ''}`.trim()}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'
