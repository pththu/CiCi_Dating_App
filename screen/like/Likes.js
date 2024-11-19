import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const DATA = [
  {
    id: "1",
    source: require("../../assets/images/likes/1_likes.png"),
    name: "David",
    age: 30,
    distance: "2 km",
  },
  {
    id: "2",
    source: require("../../assets/images/likes/2_likes.png"),
    name: "Ben",
    age: 27,
    distance: "5 km",
  },
  {
    id: "3",
    source: require("../../assets/images/likes/3_likes.png"),
    name: "Cindy",
    age: 22,
    distance: "3 km",
  },
  {
    id: "4",
    source: require("../../assets/images/likes/4_likes.png"),
    name: "Anna",
    age: 25,
    distance: "7 km",
  },
  {
    id: "5",
    source: require("../../assets/images/likes/5_likes.png"),
    name: "Grace",
    age: 26,
    distance: "1 km",
  },
  {
    id: "6",
    source: require("../../assets/images/likes/6_likes.png"),
    name: "Frank",
    age: 28,
    distance: "4 km",
  },
  {
    id: "7",
    source: require("../../assets/images/likes/7_likes.png"),
    name: "Ella",
    age: 24,
    distance: "6 km",
  },
];

const Likes = () => {
  const navigation = useNavigation(); // Use useNavigation hook to access navigation

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Use navigation to go back
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Likes</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {DATA.map((item) => (
            <View key={item.id} style={styles.imageContainer} activeOpacity={1}>
              <Image source={item.source} style={styles.profileImage} />
              <View style={styles.overlay}>
                <Text style={styles.textOverlay}>
                  {item.name}, {item.age}
                </Text>
                <Text style={styles.textDistance}>{item.distance}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 35,
  },
  headerContainer: {
    paddingTop: 53,
    marginBottom: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    aspectRatio: 0.8, // Adjust the image aspect ratio
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dimmed background
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  textOverlay: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  textDistance: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Likes;