import { colors } from '@polaris-kit/tokens'

export const darkTheme = {
  colors: {
    /* ------------------------ */
    /* Surfaces */
    /* ------------------------ */

    background: colors.zinc[950],
    foreground: colors.zinc[50],

    muted: colors.zinc[800],
    mutedForeground: colors.zinc[400],

    card: colors.zinc[900],
    cardForeground: colors.zinc[50],

    /* ------------------------ */
    /* Borders */
    /* ------------------------ */

    border: colors.zinc[800],
    borderHover: colors.zinc[700],

    /* ------------------------ */
    /* Primary */
    /* ------------------------ */

    primary: colors.blue[400],
    primaryHover: colors.blue[300],
    primaryActive: colors.blue[500],
    primaryForeground: colors.zinc[950],

    /* ------------------------ */
    /* Secondary */
    /* ------------------------ */

    secondary: colors.zinc[800],
    secondaryHover: colors.zinc[700],
    secondaryActive: colors.zinc[600],
    secondaryForeground: colors.zinc[50],

    /* ------------------------ */
    /* Accent */
    /* ------------------------ */

    accent: colors.blue[400],
    accentHover: colors.blue[300],
    accentActive: colors.blue[500],
    accentForeground: colors.zinc[50],

    /* ------------------------ */
    /* States */
    /* ------------------------ */

    success: colors.green[400],
    warning: colors.amber[400],
    danger: colors.red[500],
    info: colors.blue[400],

    /* ------------------------ */
    /* Text helpers */
    /* ------------------------ */

    textMuted: colors.zinc[400],
    textDisabled: colors.zinc[600],
    textSubtle: colors.zinc[400]
  }
} as const
