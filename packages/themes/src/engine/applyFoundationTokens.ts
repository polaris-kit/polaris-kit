import {
  spacing,
  radius,
  shadow,
  blur,
  opacity,
  motion,
  duration,
  easing,
  zIndex,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing
} from '@polaris-ui/tokens'

import { flattenTokens } from '../internal/flattenTokens'
import { applyVariables } from '../internal/applyVariables'

/**
 * Applies all foundation design tokens as CSS variables.
 *
 * These tokens are global primitives and do not change
 * between themes (light/dark).
 */
export function applyFoundationTokens(root: HTMLElement = document.documentElement) {
  applyVariables(flattenTokens(spacing), {
    prefix: 'space',
    root
  })

  applyVariables(flattenTokens(radius), {
    prefix: 'radius',
    root
  })

  applyVariables(flattenTokens(shadow), {
    prefix: 'shadow',
    root
  })

  applyVariables(flattenTokens(blur), {
    prefix: 'blur',
    root
  })

  applyVariables(flattenTokens(opacity), {
    prefix: 'opacity',
    root
  })

  applyVariables(flattenTokens(motion), {
    prefix: 'motion',
    root
  })

  applyVariables(flattenTokens(duration), {
    prefix: 'duration',
    root
  })

  applyVariables(flattenTokens(easing), {
    prefix: 'easing',
    root
  })

  applyVariables(flattenTokens(fontFamily), {
    prefix: 'font-family',
    root
  })

  applyVariables(flattenTokens(fontSize), {
    prefix: 'font-size',
    root
  })

  applyVariables(flattenTokens(fontWeight), {
    prefix: 'font-weight',
    root
  })

  applyVariables(flattenTokens(lineHeight), {
    prefix: 'line-height',
    root
  })

  applyVariables(flattenTokens(letterSpacing), {
    prefix: 'letter-spacing',
    root
  })

  applyVariables(flattenTokens(zIndex), {
    prefix: 'z-index',
    root
  })
}
