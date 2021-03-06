// Source: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba

// helper function that accepts a hex color code and converts it to rgba (allowing us to manipulate the opacity)
export const hexToRGBA = (hex) => {
  const a = .4
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")"
}