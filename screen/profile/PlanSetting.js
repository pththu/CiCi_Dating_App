import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

const PlanSetting = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState("6 months");
  const [selectedScreen, setSelectedScreen] = useState("plan1");

  const plansData = {
    plan1: [
      { duration: "12", price: "$7/mo", savings: "" },
      { duration: "6", price: "$10/mo", savings: "Save 36%" },
      { duration: "1", price: "$19/mo", savings: "" },
    ],
    plan2: [
      { duration: "24", price: "$5/mo", savings: "Save 50%" },
      { duration: "12", price: "$8/mo", savings: "" },
      { duration: "3", price: "$15/mo", savings: "Save 25%" },
    ],
    plan3: [
      { duration: "18", price: "$6/mo", savings: "" },
      { duration: "9", price: "$9/mo", savings: "Save 30%" },
      { duration: "2", price: "$17/mo", savings: "" },
    ],
    plan4: [
      { duration: "30", price: "$4/mo", savings: "Save 60%" },
      { duration: "15", price: "$7/mo", savings: "" },
      { duration: "5", price: "$14/mo", savings: "Save 20%" },
    ],
    plan5: [
      { duration: "36", price: "$3/mo", savings: "Save 70%" },
      { duration: "18", price: "$6/mo", savings: "" },
      { duration: "6", price: "$12/mo", savings: "Save 15%" },
    ],
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Manage Subscription</Text>
        </View>
      </View>

      <View style={styles.currentPlanSection}>
        <View style={styles.planInfo}>
          <Text style={styles.label}>Current Plan</Text>
          <Text style={styles.planDetails}>Free</Text>
        </View>
        <View style={styles.planInfo}>
          <Text style={styles.label}>Time Period</Text>
          <Text style={styles.planDetails}>12/04/2020 - 12/04/2021</Text>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.unsubscribeButton}>
            <Text style={[styles.buttonText, styles.buttonTextUnsubscribe]}>
              UNSUBSCRIBE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={[styles.buttonText, styles.buttonTextUpgrade]}>
              UPGRADE
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.goldSection}>
        <Text style={styles.goldHeader}>Get Mingle Gold</Text>
        <View style={styles.goldIconWrapper}>
          <FontAwesomeIcon icon={faHeart} size={30} style={styles.goldIcon} />
        </View>
        <Text style={styles.goldDescription}>Unlimited Likes</Text>
        <Text style={styles.goldSubDescription}>
          Send as many likes as you want
        </Text>

        <View style={styles.planSelectionWrapper}>
          {Object.keys(plansData).map((screen) => (
            <TouchableOpacity
              key={screen}
              style={[
                styles.planButton,
                selectedScreen === screen && styles.selectedPlanButton,
              ]}
              onPress={() => setSelectedScreen(screen)}
            >
              <View
                style={[
                  styles.planCircle,
                  selectedScreen === screen && styles.selectedPlanCircle,
                ]}
              >
                {selectedScreen === screen && (
                  <View style={styles.innerCircle} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.plansContainer}>
          {plansData[selectedScreen]?.map((plan, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.planDetailsContainer,
                selectedPlan === plan.duration && styles.selectedPlanContainer,
              ]}
              onPress={() => handlePlanSelect(plan.duration)}
            >
              <View>
                <Text style={styles.planDuration}>{plan.duration}</Text>
                <Text style={styles.planDurationMonths}>months</Text>
              </View>
              <Text style={styles.planPrice}>{plan.price}</Text>
              {plan.savings && (
                <Text style={styles.planSavings}>{plan.savings}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.boxContinueButton}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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

  currentPlanSection: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },

  planInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
  },

  planDetails: {
    fontSize: 15,
    marginBottom: 10,
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  unsubscribeButton: {
    flex: 1,
    padding: 10,
    marginRight: 5,
    borderColor: "#828282",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
  },

  upgradeButton: {
    flex: 1,
    padding: 10,
    marginLeft: 5,
    backgroundColor: "#aa3fec",
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
  },

  buttonTextUnsubscribe: {
    color: "black",
  },

  buttonTextUpgrade: {
    color: "#fff",
  },

  goldSection: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    alignItems: "center",
  },

  goldHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFA500",
  },

  goldIconWrapper: {
    margin: 10,
    padding: 10,
    backgroundColor: "#9338cc",
    borderRadius: 100,
  },

  goldIcon: {
    color: "#fff",
  },

  goldDescription: {
    fontSize: 18,
    fontWeight: "bold",
  },

  goldSubDescription: {
    marginBottom: 15,
    color: "#555",
  },

  planSelectionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  planButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },

  planText: {
    color: "#fff",
    fontWeight: "bold",
  },

  selectedPlanButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 15,
  },

  planCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bbb",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedPlanCircle: {
    borderColor: "#FFA500",
  },

  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFA500",
  },

  plansContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  planDetailsContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 15,
  },

  selectedPlanContainer: {
    backgroundColor: "#FFF7E6",
    borderColor: "#FFA500",
    borderWidth: 1,
  },

  planDuration: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  planDurationMonths: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  planPrice: {
    fontSize: 16,
    color: "#ff9900",
  },

  planSavings: {
    fontSize: 14,
    color: "green",
  },

  boxContinueButton: {
    padding: 15,
    alignItems: "center",
  },

  continueButton: {
    width: "100%",
    padding: 15,
    backgroundColor: "#D19234",
    borderRadius: 30,
    alignItems: "center",
    margin: 30,
  },

  continueButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PlanSetting;