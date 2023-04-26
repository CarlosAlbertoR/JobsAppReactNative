import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch, { IJob } from "../../../hook/useFetch";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackNavigatorParamList } from "../../../navigation/types";

const Nearbyjobs = () => {
  const { data, loading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
    page: "1",
  });

  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();
  const handleCardPress = (activeJob: IJob) => {
    navigation.navigate("JobDetails", { jobId: activeJob.job_id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              item={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={handleCardPress}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
