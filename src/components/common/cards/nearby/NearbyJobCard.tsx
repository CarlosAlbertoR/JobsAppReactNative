import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./nearbyjobcard.style";

import { IJob } from "../../../../hook/useFetch";
import { checkImageURL } from "../../../../utils";

interface NearbyJobCardProps {
  item: IJob;
  handleNavigate: (item: IJob) => void;
}

const NearbyJobCard = ({ item, handleNavigate }: NearbyJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
