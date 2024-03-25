import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
