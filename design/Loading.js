import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Text } from "./Text";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0000ff" size="large" />
      <Text
        color="black"
        style={styles.loadingText}
        typography="h1"
        value="Loading..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 10,
  },
});
export default LoadingScreen;