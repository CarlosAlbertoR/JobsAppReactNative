import { RouteProp } from "@react-navigation/native";

export type AppStackNavigatorParamList = {
  Home: undefined;
  JobDetails: { jobId: string };
  Search?: undefined;
};

export type JobDetailsScreenRouteProp = RouteProp<
  AppStackNavigatorParamList,
  "JobDetails"
>;
