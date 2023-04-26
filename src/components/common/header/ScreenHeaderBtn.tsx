import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
  dimension: string;
  iconUrl: ImageSourcePropType;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity
      style={styles({ dimension }).btnContainer}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles({ dimension }).btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
