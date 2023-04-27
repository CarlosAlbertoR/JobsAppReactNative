import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface StylesProps {
  dimension: string;
}

const styles = ({ dimension }: StylesProps) =>
  StyleSheet.create({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: SIZES.small,
    },
    btnImg: {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });

export default styles;
