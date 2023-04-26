import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

import styles from "./footer.style";

import { icons } from "../../../constants";

interface FooterProps {
  url: string;
}

const Footer = ({ url }: FooterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for the job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
