import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

const EditProfile = ({ navigation }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState(
    dateOfBirth.toLocaleDateString()
  );

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfBirth;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
    setFormattedDate(currentDate.toLocaleDateString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxPr}>
        <TouchableOpacity
          style={styles.headerPr}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textEdit}>Edit</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textTitle}>Account Settings</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          defaultValue="Jenny"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          defaultValue="+91 9876543210"
        />

        {/* TextInput for selecting the date, shows DateTimePicker when tapped */}
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={formattedDate}
          onTouchStart={() => setShowDatePicker(true)} // Show DateTimePicker on touch
        />

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateOfBirth}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          defaultValue="abcqwertyu@gmail.com"
        />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textSave}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
  },

  boxPr: {
    paddingTop: 53,
    marginBottom: 30,
  },

  headerPr: {
    flexDirection: "row",
    alignItems: "center",
  },

  textEdit: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
  input: {
    padding: 10,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  btn: {
    padding: 10,
    marginTop: 20,
    backgroundColor: "#aa3fec",
    borderRadius: 30,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  textSave: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  textTitle: {
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
  },
});
