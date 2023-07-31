import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarPostDetailScreen from './components/screens/CarPostDetailScreen/CarPostDetailScreen';
import FeedScreen from './components/screens/FeedScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <CarPostDetailScreen />
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
