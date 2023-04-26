import { FlatList, Text, TouchableOpacity, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

interface TabsProps {
  tabs: Array<string>;
  activeTab: string;
  setActiveTab: (active: string) => void;
}

interface TabButtonProps {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: TabButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, name === activeTab && styles.activeBtn]}
      onPress={onHandleSearchType}
    >
      <Text
        style={[styles.btnText, name === activeTab && styles.activeBtnText]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
