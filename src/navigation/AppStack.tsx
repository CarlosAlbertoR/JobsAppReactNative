import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ScreenHeaderBtn } from "../components";
import { COLORS, icons, images } from "../constants";
import HomeScreen from "../screens/Home";
import JobDetailsScreen from "../screens/JobDetails";
import { AppStackNavigatorParamList } from "./types";

const Stack = createStackNavigator<AppStackNavigatorParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetailsScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.white },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => navigation.navigate("Home")}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
            ),
            headerTitle: "",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
