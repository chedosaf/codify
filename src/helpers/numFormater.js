export const numFormatter = (value) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ");