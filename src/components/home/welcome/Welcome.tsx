import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons, SIZES } from "../../../constants";
import styles from "./welcome.style";

interface TypeJobTabProps {
  item: string;
}

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const typeJopTab = ({ item }: TypeJobTabProps) => {
    const isTabActive = activeJobType === item;
    return (
      <TouchableOpacity
        style={[
          styles.tab,
          { borderColor: isTabActive ? COLORS.secondary : COLORS.gray2 },
        ]}
        onPress={() => setActiveJobType(item)}
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
        <Text style={styles.userName}>Hello Carlos!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job.</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value=""
            onChange={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
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
