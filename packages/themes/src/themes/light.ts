import { colors } from '@polaris-ui/tokens'

export const lightTheme = {
  colors: {
    /* ------------------------ */
    /* Surfaces */
    /* ------------------------ */

    background: colors.white,
    foreground: colors.zinc[900],

    muted: colors.zinc[100],
    mutedForeground: colors.zinc[500],

    card: colors.white,
    cardForeground: colors.zinc[900],

    /* ------------------------ */
    /* Borders */
    /* ------------------------ */

    border: colors.zinc[200],
    borderHover: colors.zinc[300],

    /* ------------------------ */
    /* Primary */
    /* ------------------------ */

    primary: colors.blue[600],
    primaryHover: colors.blue[700],
    primaryActive: colors.blue[800],
    primaryForeground: colors.white,

    /* ------------------------ */
    /* Secondary */
    /* ------------------------ */

    secondary: colors.zinc[200],
    secondaryHover: colors.zinc[300],
    secondaryActive: colors.zinc[400],
    secondaryForeground: colors.zinc[900],

    /* ------------------------ */
    /* Accent */
    /* ------------------------ */

    accent: colors.indigo[600],
    accentHover: colors.indigo[700],
    accentActive: colors.indigo[800],
    accentForeground: colors.white,

    /* ------------------------ */
    /* States */
    /* ------------------------ */

    success: colors.green[600],
    warning: colors.amber[500],
    danger: colors.red[600],
    info: colors.blue[600],

    /* ------------------------ */
    /* Text helpers */
    /* ------------------------ */

    textMuted: colors.zinc[500],
    textDisabled: colors.zinc[400],
    textSubtle: colors.zinc[800]
  }
} as const
