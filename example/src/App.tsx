import { Provider } from 'react-native-beautiful-networking'
import { Text, View, StyleSheet } from 'react-native'
import { Host } from 'react-native-portalize'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <Host>
        <Provider
          config={{
            backgroundColor: 'red',
            textColor: 'white',
            zIndex: 1000,
            text: 'No internet connection',
            fontSize: 16,
            fontFamily: 'Arial',
            paddingVertical: 10,
            paddingHorizontal: 20
          }}
        >
          <View style={styles.container}>
            <Text>Hello2</Text>
          </View>
        </Provider>
      </Host>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
