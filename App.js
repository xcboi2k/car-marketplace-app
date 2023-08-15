import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FeedScreen from './components/screens/FeedScreen'
import CarPostDetailScreen from './components/screens/CarPostDetailScreen/CarPostDetailScreen';
import CarPostCreateScreen from './components/screens/CarPostCreateScreen/CarPostCreateScreen';
import CarPostEditScreen from './components/screens/CarPostEditScreen/CarPostEditScreen';

import SignUpScreen from './components/screens/SignUpScreen/SignUpScreen';
import OtherInfoScreen from './components/screens/OtherInfoScreen/OtherInfoScreen';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';

import ProfileViewScreen from './components/screens/ProfileViewScreen/ProfileViewScreen';
import ProfileEditScreen from './components/screens/ProfileEditScreen/ProfileEditScreen';
import UserListingScreen from './components/screens/UserListingScreen/UserListingScreen';
import SellerListingScreen from './components/screens/SellerListingScreen/SellerListingScreen';
import ReviewsScreen from './components/screens/ReviewsScreen/ReviewsScreen';
import ReviewCreateScreen from './components/screens/ReviewCreateScreen/ReviewCreateScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUpScreen /> */}
      {/* <OtherInfoScreen /> */}
      {/* <LoginScreen /> */}

      {/* <FeedScreen /> */}
      {/* <CarPostDetailScreen /> */}
      {/* <CarPostCreateScreen /> */}
      {/* <CarPostEditScreen /> */}

      {/* <ProfileViewScreen /> */}
      {/* <ProfileEditScreen /> */}
      {/* <UserListingScreen /> */}
      {/* <SellerListingScreen /> */}
      <ReviewsScreen />
      {/* <ReviewCreateScreen /> */}
      
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
