// import Colors from "../theme/Colors";
import ElevationStyle from "../atoms/ElevationStyle";

export default {
  cursor: "pointer",
  ...ElevationStyle(1),
  ":hover": { ...ElevationStyle(2) },
  ":active": { ...ElevationStyle(0) }
};
