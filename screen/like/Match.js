import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Match = () => {
  return (
    <LinearGradient
      colors={["#BC7BE4", "#A020F0"]}
      start={{ x: 0.5, y: 0.21 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>It's a Match!</Text>
      <Text style={styles.subtitle}>Lucy likes you too</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/match/1_match.png")}
          style={styles.profileImage}
        />
        <Image
          source={require("../../assets/images/match/2_match.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.boxButton}>
        <LinearGradient
          colors={["#BB34D2", "#A020F0"]}
          style={styles.boxMessageButton}
        >
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>SEND A MESSAGE</Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={styles.swipeButton}>
          <Text style={styles.buttonText}>KEEP SWIPING</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 30,
  },
  imageContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  profileImage: {
    width: 112,
    height: 112,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  boxButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  boxMessageButton: {
    width: "80%",
    borderRadius: 30,
  },
  messageButton: {
    padding: 15,
  },
  swipeButton: {
    padding: 13,
    width: "80%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Match;