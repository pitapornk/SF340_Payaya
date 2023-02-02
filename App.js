import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YourTaskPage from "./YourTaskPage";

const Stack = createNativeStackNavigator();

function PageStack() {
  return(
    <Stack.Navigator>
    <Stack.Screen
      name="YourTaskPage"
      component={YourTaskPage}
      options={{headerShown:false}}
    />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PageStack/>
    </NavigationContainer>
  );
}
