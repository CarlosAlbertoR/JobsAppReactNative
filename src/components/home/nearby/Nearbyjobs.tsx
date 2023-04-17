import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const { data, loading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
    page: "1",
  });

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
              handleNavigate={() => {}}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
