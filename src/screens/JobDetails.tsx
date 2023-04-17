import { useCallback, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import { JobDetailsScreenRouteProp } from "../navigation/types";
import useFetch from "../hook/useFetch";
import { COLORS, SIZES } from "../constants";
import { Company, JobTabs } from "../components";

const JobDetailsScreen = () => {
  const { params } = useRoute<JobDetailsScreenRouteProp>();

  const { data, loading, error, refetch } = useFetch("job-details", {
    job_id: params.jobId,
  });

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong!</Text>
      ) : data.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
          <Company
            companyLogo={data[0].employer_logo}
            jobTitle={data[0].job_title}
            companyName={data[0].employer_name}
            location={data[0].job_country}
          />
          <JobTabs />
        </View>
      )}
    </ScrollView>
  );
};

export default JobDetailsScreen;
