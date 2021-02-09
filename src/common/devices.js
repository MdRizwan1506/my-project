import screen from '../assets/scss/screen.scss'

export const devices = {
    mobile: `(max-width: ${screen.mobile})`,
    tablet: `(max-width: ${screen.tablet})`,
    desktop: `(min-width: ${screen.desktop})`
}