import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  activeBtn: { backgroundColor: COLORS.primary },
  btnText: {
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: "#AAA9B8",
  },
  activeBtnText: { color: "#C3BFCC" },
});

export default styles;
