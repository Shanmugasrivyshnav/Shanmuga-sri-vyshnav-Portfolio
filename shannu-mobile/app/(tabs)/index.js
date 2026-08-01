import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Platform,
  StyleSheet,
  View,
} from "react-native";

import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const webViewRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);

  // Android back button
  useEffect(() => {
    if (Platform.OS !== "android") {
      return;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (canGoBack && webViewRef.current) {
          webViewRef.current.goBack();
          return true;
        }

        return false;
      },
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  // For Web browser
  if (Platform.OS === "web") {
    return (
      <iframe
        src="https://shanmuga-sri-vyshnav-portfolio.vercel.app/"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      />
    );
  }

  // Android + iOS
  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{
          uri: "https://shanmuga-sri-vyshnav-portfolio.vercel.app/",
        }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        pullToRefreshEnabled={true}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        onNavigationStateChange={(state) => {
          setCanGoBack(state.canGoBack);
        }}
      />

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#6366f1" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
  },

  loading: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#ffffff",
  },
});
