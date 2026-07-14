/**
 * Polaris UI
 * Design Tokens Public API
 *
 * This is the single entry point for all design tokens.
 * Tokens are primitives and should NOT contain business logic.
 *
 * Themes are responsible for mapping tokens → CSS variables.
 */

/* ---------------------------------- */
/* Core primitives */
/* ---------------------------------- */

export { colors } from './colors'
export { spacing, space } from './spacing'
export { radius } from './radius'
export { shadow } from './shadows'
export { blur, backdropBlur } from './blur'
export { opacity } from './opacity'
export { motion, duration, easing } from './motion'
export { zIndex } from './z-index'
export {
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing
} from './typography'

/* ---------------------------------- */
/* Types (public API) */
/* ---------------------------------- */

export type { ColorsToken } from './colors'
export type { SpacingToken, SpaceToken } from './spacing'
export type { RadiusToken } from './radius'
export type { ShadowsToken } from './shadows'
export type { BlurToken, BackdropBlurToken } from './blur'
export type { OpacityToken } from './opacity'
export type { DurationToken, EasingToken } from './motion'
export type { ZIndexToken } from './z-index'
export type {
  FontFamilyToken,
  FontSizeToken,
  FontWeightToken,
  LineHeightToken,
  LetterSpacingToken
} from './typography'
