import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Using named import
import Slider from "@react-native-community/slider";
// import RangeSlider from "react-native-range-slider-expo";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";

const LanguageSelector = ({ setSelectedLanguage, selectedLanguage }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const languages = [
    "English",
    "Afrikaans",
    "Aghem",
    "Akan",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Assamese",
    // Add more languages if needed
  ];

  return (
    <View style={styles.modalLanguage}>
      <Text style={styles.text}>Preferred Language</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>{selectedLanguage}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select Language</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => {
                setSelectedLanguage(itemValue);
                setModalVisible(false);
              }}
              style={styles.picker}
            >
              {languages.map((language, index) => (
                <Picker.Item key={index} label={language} value={language} />
              ))}
            </Picker>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const GenderSelector = ({ selectedGender, setSelectedGender }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setModalVisible(false);
  };

  return (
    <View style={styles.genderContainer}>
      <Text style={styles.text}>Show Me</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>{selectedGender || "Men"}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.genderModalContainer}>
          <View style={styles.genderModalContent}>
            <Text style={styles.genderModalTitle}>Show me</Text>
            <TouchableOpacity onPress={() => handleSelectGender("Men")}>
              <Text style={styles.genderOptionText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectGender("Women")}>
              <Text style={styles.genderOptionText}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.genderCloseButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);

  const handleValuesChange = (values) => {
    setLow(values[0]);
    setHigh(values[1]);
  };

  const [distance, setDistance] = useState(100);

  const handleSliderChange = debounce((value) => {
    setDistance(value);
  }, 100);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedGender, setSelectedGender] = useState("Women");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.boxPr}>
        <TouchableOpacity
          style={styles.headerPr}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textPro}>Profile</Text>
        </View>
        <View style={styles.imgPr}>
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../assets/images/profile/1_profile.png")}
            />
            <View style={styles.icon_faPen}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
              >
                <FontAwesomeIcon icon={faPen} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.textJenny}>Jenny, 22</Text>
        </View>
      </View>

      <View style={styles.boxCenter}>
        <View style={styles.boxPr1}>
          <View style={styles.line1}>
            <Text style={styles.textTitle}>Account Settings</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={styles.textEdit}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Name</Text>
            <Text style={[styles.text, { color: "#8e8e8e" }]}>Jenny</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Phone Number</Text>
            <Text style={[styles.text, { color: "#8e8e8e" }]}>
              +91 9876543210
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Date of birth</Text>
            <Text style={[styles.text, { color: "#8e8e8e" }]}>02-05-1997</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Email</Text>
            <Text style={[styles.text, { color: "#8e8e8e" }]}>
              abcqwertyu@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.boxPr1}>
          <View style={styles.line1}>
            <Text style={styles.textTitle}>Plan Settings</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Current Plan</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("PlanSetting")}
            >
              <Text style={styles.textButton}>Free</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxPr1}>
          <View style={styles.line1}>
            <Text style={styles.textTitle}>Discovery Settings</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text}>Location</Text>
            <TouchableOpacity>
              <Text style={styles.textButton}>My Current Location</Text>
            </TouchableOpacity>
          </View>

          <LanguageSelector
            setSelectedLanguage={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
          />

          <GenderSelector
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />

          {/* Age Range */}
          {/* <View style={[styles.box, { flexDirection: "column" }]}>
            <View style={styles.line1}>
              <Text style={styles.text}>Age Range</Text>
              <Text style={styles.textThongSo}>
                {low} - {high}
              </Text>
            </View>
            <RangeSlider
              min={0}
              max={100}
              fromValueOnChange={(value) => setLow(value)} // Cập nhật giá trị của đầu trượt "from"
              toValueOnChange={(value) => setHigh(value)} // Cập nhật giá trị của đầu trượt "to"
              from={low} // Gán giá trị cho đầu trượt "from"
              to={high} // Gán giá trị cho đầu trượt "to"
              styleSize="small"
              toKnobColor="#aa3fec"
              fromKnobColor="#aa3fec"
              valueLabelsBackgroundColor="#aa3fec"
              inRangeBarColor="#cacaca"
              outOfRangeBarColor="#cacaca"
            />
          </View> */}

          {/* Maximum Distance */}
          {/* <View style={[styles.box, { flexDirection: "column" }]}>
            <View style={styles.line1}>
              <Text style={styles.text}>Maximum Distance</Text>
              <Text style={styles.textThongSo}>{distance.toFixed(0)} km</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Slider
                minimumValue={0}
                maximumValue={500}
                value={distance}
                onValueChange={(value) => setDistance(value)}
                minimumTrackTintColor="#aa3fec"
                maximumTrackTintColor="#cacaca"
                thumbTintColor="#aa3fec"
                style={{ width: "100%" }}
              />
            </View>
          </View> */}

          {/* Age Range */}
          <View style={[styles.box, { flexDirection: "column" }]}>
            <View style={styles.line1}>
              <Text style={styles.text}>Age Range</Text>
              <Text style={styles.textThongSo}>
                {low} - {high}
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MultiSlider
                values={[low, high]}
                min={0}
                max={100}
                onValuesChange={handleValuesChange}
                selectedStyle={{ backgroundColor: "#aa3fec" }}
                unselectedStyle={{ backgroundColor: "#cacaca" }}
                markerStyle={{ backgroundColor: "#aa3fec" }}
                style={{ width: "100%" }}
              />
            </View>
          </View>

          <View style={[styles.box, { flexDirection: "column" }]}>
            <View style={styles.line1}>
              <Text style={styles.text}>Maximum Distance</Text>
              <Text style={styles.textThongSo}>{distance.toFixed(0)} km</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Slider
                minimumValue={0} // Giá trị tối thiểu
                maximumValue={500} // Giá trị tối đa
                value={distance} // Giá trị hiện tại của slider
                onValueChange={handleSliderChange} // Hàm xử lý khi giá trị thay đổi
                minimumTrackTintColor="#aa3fec" // Màu sắc cho phần đã chọn
                maximumTrackTintColor="#cacaca" // Màu sắc cho phần chưa chọn
                thumbTintColor="#aa3fec" // Màu sắc cho thanh trượt
                style={{ width: "100%" }} // Kích thước thanh trượt
              />
            </View>
          </View>

          {/* btn */}
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textThongSo}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={[styles.textThongSo, { color: "#c02929" }]}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },

  boxPr: {
    height: 320,
    backgroundColor: "#bd69f0",
    padding: 21,
    paddingTop: 53,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },

  headerPr: {
    flexDirection: "row",
    alignItems: "center",
  },

  textPro: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    color: "white",
  },

  imgPr: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    marginBottom: 15,
  },

  icon_faPen: {
    position: "absolute",
    right: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },

  textJenny: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    color: "white",
  },

  boxCenter: {
    paddingTop: 5,
  },

  boxPr1: {
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 10,
  },

  line1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  textTitle: {
    fontWeight: "500",
    fontSize: 18,
  },

  textEdit: {
    color: "#247DCF",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
    textDecorationLine: "underline",
  },

  box: {
    padding: 10,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },

  text: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 14,
  },

  textButton: {
    fontWeight: "500",
    fontSize: 14,
    color: "#247dcf",
  },

  textThongSo: {
    fontWeight: "500",
    fontSize: 14,
  },

  btns: {
    marginTop: 30,
  },

  btn: {
    padding: 10,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },

  control: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 21,
    borderWidth: 1,
    borderColor: "#c6c6c6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },

  modalLanguage: {
    marginBottom: 15,
    padding: 10,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    width: 320,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    maxHeight: "80%",
  },

  modalText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
    textAlign: "center",
  },

  picker: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },

  closeButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },

  closeButtonText: {
    color: "#7F3FBF",
    fontSize: 16,
    textAlign: "center",
  },

  genderContainer: {
    marginBottom: 15,
    padding: 10,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  genderShowButton: {
    padding: 10,
    backgroundColor: "#7F3FBF",
    borderRadius: 5,
  },

  genderShowButtonText: {
    color: "#fff",
    fontSize: 14,
  },

  genderSelectedText: {
    fontSize: 14,
    color: "#000",
  },

  genderModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  genderModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },

  genderModalTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },

  genderOptionText: {
    fontSize: 16,
    color: "#7F3FBF",
    marginVertical: 10,
  },

  genderCloseButton: {
    fontSize: 16,
    color: "#c02929",
    marginTop: 20,
  },

  menu: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 0,
    position: "fixed",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 1,
  },
});
