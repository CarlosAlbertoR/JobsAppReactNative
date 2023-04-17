import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./popularjobcard.style";
import { IJob } from "../../../../hook/useFetch";
import { checkImageURL } from "../../../../utils";

interface PopularJobCardProps {
  item: IJob;
  selectedJob: IJob | null;
  handleCardPress: (item: IJob) => void;
}

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedJob?.job_id === item.job_id && styles.activeContainer,
      ]}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={[
          styles.logoContainer,
          selectedJob?.job_id === item.job_id && styles.activeLogoContainer,
        ]}
      >
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
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.jobName,
            selectedJob?.job_id === item.job_id && styles.activejobName,
          ]}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
