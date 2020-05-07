import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ProfileScreen,
  HomeScreen,
  SearchScreen,
  LogoutScreen,
} from "./screens";
import SideBare from "./Components/SideBar";
import { color } from "react-native-reanimated";
const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Profile",
        drawerIcon: ({ tintColor }) => (
          <Feather name="user" size={16} color={tintColor} />
        ),
      },
    },
    HomeScreen,
    SearchScreen,
    LogoutScreen,
  },
  {
    contentComponent: (props) => <SideBare {...props} />,
  }
);
export default createAppContainer(DrawerNavigator);
