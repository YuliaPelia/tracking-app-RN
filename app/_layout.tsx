import { GlobalStyles } from "@/constants/styles";
import AllExpenses from "@/screens/AllExpenses";
import ManageExpenses from "@/screens/ManageExpense";
import RecentExpenses from "@/screens/RecentExpenses";
import IconButton from "@/ui/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import ExpensesContextProvider from "../store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabsNavigator = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabsNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color="white"
            onPress={() => {
              navigation.navigate("ManageExpenses");
            }}
          />
        ),
      })}
    >
      <BottomTabsNavigator.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color}  size={size} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabsNavigator.Navigator>
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      {/* <NavigationContainer> */}
      <ExpensesContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpenses}
          options={{ title: "Manage Expense", presentation: "modal" }}
        />
      </Stack.Navigator>
      </ExpensesContextProvider>
      {/* </NavigationContainer> */}
    </>
  );
}
