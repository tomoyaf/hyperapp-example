import Colors from "../theme/Colors";

export default e => ({
  boxShadow: `0 ${0.5 * e ** 2 + 0.5 * e}px ${e == 0 ? 1 : e ** 2 + 2 * e}px ${
    e >= Colors.Shadows.length
      ? Colors.Shadows[e]
      : Colors.Shadows[Colors.Shadows.length - 1]
  }`
});
