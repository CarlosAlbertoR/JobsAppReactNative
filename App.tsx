import React from "react";
import { useFonts } from "expo-font";

import AppStack from "./src/navigation/AppStack";

const App = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return <AppStack />;
};
export default App;
