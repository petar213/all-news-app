import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import BrowseScreen from "../Screens/BrowseScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";

export default function ApplicationTabs() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Browse" },
    { key: "second", title: "News" },
  ]);

  // reactive-native-tab-view component
  const renderScene = SceneMap({
    first: BrowseScreen,
    second: NewsScreen,
  });

  return (
      // reactive-native-tab-view component
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
