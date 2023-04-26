import { RouteProp } from "@react-navigation/native";

export type AppStackNavigatorParamList = {
  Home: undefined;
  JobDetails: { jobId: string };
  Search: { id: string };
};

export type JobDetailsScreenRouteProp = RouteProp<
  AppStackNavigatorParamList,
  "JobDetails"
>;

export type SearchScreenRouteProp = RouteProp<
  AppStackNavigatorParamList,
  "Search"
>;
