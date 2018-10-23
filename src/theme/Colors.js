export default {
  Shadows: [
    `rgba(0, 0, 0, 0.08)`,
    `rgba(0, 0, 0, 0.08)`,
    `rgba(0, 0, 0, 0.12)`,
    `rgba(0, 0, 0, 0.16)`
  ],
  molecules: {
    Button: {
      backgroundColor: {
        default: `#fefefe`,
        primary: `#4286f4`
      },
      color: {
        default: `rgb(30, 30, 30)`,
        primary: `#fdfdfd`
      }
    },
    Text: {
      XS: `rgba(30, 30, 30, 0.7)`,
      S: `rgba(30, 30, 30, 0.8)`,
      M: `rgba(30, 30, 30, 1.0)`,
      L: `rgba(30, 30, 30, 1.0)`,
      XL: `rgba(30, 30, 30, 1.0)`
    }
  },
  organisms: {
    Header: {
      backgroundColor: `#fbfbfb`,
      color: `rgb(30, 30, 30)`
    }
  }
};
