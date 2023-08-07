import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarPostDetailScreen from './components/screens/CarPostDetailScreen/CarPostDetailScreen';
import FeedScreen from './components/screens/FeedScreen'
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import ProfileViewScreen from './components/screens/ProfileViewScreen/ProfileViewScreen';
import UserListingScreen from './components/screens/UserListingScreen/UserListingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarPostDetailScreen /> */}
      <ProfileViewScreen />
      {/* <LoginScreen /> */}
      {/* <UserListingScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
