import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import { COLORS, SIZES } from "../constants";

import { AppStackNavigatorParamList } from "../navigation/types";

const HomeScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackNavigatorParamList>>();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) navigation.navigate("Search", { id: searchTerm });
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
