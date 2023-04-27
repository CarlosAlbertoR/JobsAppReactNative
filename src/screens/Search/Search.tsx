import { API_KEY } from "@env";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./search.style";
import {
  AppStackNavigatorParamList,
  SearchScreenRouteProp,
} from "../../navigation/types";
import { NearbyJobCard } from "../../components";
import { IJob, IResponse } from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";

const SearchScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();
  const { params } = useRoute<SearchScreenRouteProp>();

  const [searchResult, setSearchResult] = useState<Array<IJob>>([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response: AxiosResponse<IResponse> = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error: any) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: string) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <FlatList
      data={searchResult}
      renderItem={({ item }) => (
        <NearbyJobCard
          item={item}
          key={`job-${item.job_id}`}
          handleNavigate={() =>
            navigation.navigate("JobDetails", { jobId: item.job_id })
          }
        />
      )}
      keyExtractor={(item) => item.job_id}
      contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
      ListHeaderComponent={() => (
        <>
          <View style={styles.container}>
            <Text style={styles.searchTitle}>{params.id}</Text>
            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
          </View>
          <View style={styles.loaderContainer}>
            {searchLoader ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : (
              searchError && <Text>Oops something went wrong</Text>
            )}
          </View>
        </>
      )}
      ListFooterComponent={() => (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination("left")}
          >
            <Image
              source={icons.chevronLeft}
              style={styles.paginationImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.paginationTextBox}>
            <Text style={styles.paginationText}>{page}</Text>
          </View>
          <TouchableOpacity
            style={styles.paginationButton}
            onPress={() => handlePagination("right")}
          >
            <Image
              source={icons.chevronRight}
              style={styles.paginationImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default SearchScreen;
