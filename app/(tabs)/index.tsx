import AllExpenses from "@/screens/AllExpenses";
import ManageExpenses from "@/screens/ManageExpense";
import RecentExpenses from "@/screens/RecentExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();
const BottomTabsNavigator = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabsNavigator.Navigator>
      <BottomTabsNavigator.Screen
        name="RecentExpenses"
        component={RecentExpenses}
      />
      <BottomTabsNavigator.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabsNavigator.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
