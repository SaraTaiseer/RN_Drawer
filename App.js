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

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  HomeScreen,
  SearchScreen,
  LogoutScreen,
});
export default createAppContainer(DrawerNavigator);
