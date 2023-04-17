import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import styles from "./popularjobs.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch, { IJob } from "../../../hook/useFetch";

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState<IJob | null>(null);
  const { data, loading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
    page: "1",
  });

  const handleCardPress = (activeJob: IJob) => {
    setSelectedJob(activeJob);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!!</Text>
        ) : (
          <FlatList
            data={[...data]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
