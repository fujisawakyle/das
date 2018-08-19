import { css } from 'styled-components';

const sizes = {
    xs: 576,
    sm: 768,
    md: 1024,
    lg: 1200
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `

    return acc
}, {})

export default media