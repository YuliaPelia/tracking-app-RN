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

const Stack = createNativeStackNavigator();
const BottomTabsNavigator = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabsNavigator.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerRight: () => (
        <IconButton icon="add" size={24} color="white" onPress={() => {}} />
      ),
     }}>
      <BottomTabsNavigator.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTabsNavigator.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar-outline" color={color} size={size} />
        ),
      }} />
    </BottomTabsNavigator.Navigator>
  );
}

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <NavigationContainer> */}
      <Stack.Navigator>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}
