import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";

import styles from "./welcome.style";

import { COLORS, icons, SIZES } from "../../../constants";
import { AppStackNavigatorParamList } from "../../../navigation/types";

import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleClick: () => void;
}

interface TypeJobTabProps {
  item: string;
}

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const typeJopTab = ({ item }: TypeJobTabProps) => {
    const isTabActive = activeJobType === item;
    return (
      <TouchableOpacity
        style={[
          styles.tab,
          { borderColor: isTabActive ? COLORS.secondary : COLORS.gray2 },
        ]}
        onPress={() => {
          setActiveJobType(item);
          navigation.navigate("Search", { id: item });
        }}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: isTabActive ? COLORS.secondary : COLORS.gray2,
            },
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello there!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.nativeEvent.text);
            }}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={typeJopTab}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
