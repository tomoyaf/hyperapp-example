import Colors from "../theme/Colors";

export default e => ({
  boxShadow: `0 ${e ** 2}px ${e == 0 ? 1 : e ** 2 + 2 * e}px ${
    e >= Colors.Shadows.length
      ? Colors.Shadows[e]
      : Colors.Shadows[Colors.Shadows.length - 1]
  }`
});
