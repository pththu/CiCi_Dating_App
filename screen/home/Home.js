import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Modal, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    
    const navigation = useNavigation();
    const [isFilterChoose, setIsFilterChoose] = useState(false);
    const [distance, setDistance] = useState(0);
    const [gender, setGender] = useState('');
    const [age, setAge] = useState([18, 30]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState(require('../../assets/images/home/person01.jpg'));
    const [name, setName] = useState("Noko Lele");
    const [inforAge, setInforAge] = useState(34);
    const animation = useRef(new Animated.Value(0)).current;
    const rotation = useRef(new Animated.Value(0)).current;

    const data = [
        {
            id: 1,
            name: 'Noko Lele',
            age: 34,
            image: require('../../assets/images/home/person01.jpg')
        },
        {
            id: 1,
            name: 'Person 01',
            age: 28,
            image: require('../../assets/images/home/person02.jpg')
        },
        {
            id: 1,
            name: 'Person 02',
            age: 25,
            image: require('../../assets/images/home/person03.jpg')
        },
    ];

    const handleSwipe = (direction) => {
        animation.setValue(0);
        rotation.setValue(0);

        const isRight = direction === 'right';

        Animated.parallel([
            Animated.timing(animation, {
                toValue: isRight ? 700 : -700,
                duration: 400,
                useNativeDriver: true,
                easing: Easing.cubic,
            }),
            Animated.timing(rotation, {
                toValue: isRight ? 1 : -1,
                duration: 400,
                useNativeDriver: true,
                easing: Easing.cubic,
            })
        ]).start(() => {
            const nextIndex = (currentIndex + 1) % data.length;
            setCurrentIndex(nextIndex);
            setCurrentImage(data[nextIndex].image);
            setName(data[nextIndex].name);
            setInforAge(data[nextIndex].age);
            animation.setValue(0);
            rotation.setValue(0);
        });
    };

    const handleNo = () => {
        handleSwipe('left');
    };

    const handleYes = () => {
        handleSwipe('right');
    };

    const rotateZ = rotation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-30deg', '0deg', '30deg'],
    });

    const CustomMarker = ({ currentValue }) => {
        return (
            <View style={styles.itemValueAge}>
                <Text style={styles.ageValue}>{currentValue}</Text>
                <View style={styles.ageValueDot} />
            </View>
        );
    };

    const getGenderButtonStyle = (selectedGender) => [
        styles.btnGender,
        gender === selectedGender ? styles.btnGenderSelected : styles.btnGenderNoSelected,
    ];

    const getGenderTextStyle = (selectedGender) => [
        styles.txtBtnGender,
        gender === selectedGender ? styles.txtBtnGenderSelected : styles.txtBtnGenderNoSelected,
    ];

    const filter = (
        <SafeAreaView style={styles.containerFilter}>
            <View style={styles.subContainerFilter}>
                <View style={styles.vBtnFilter}>
                    <TouchableOpacity style={styles.btnFilter}
                        onPress={() => setIsFilterChoose(false)}>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnFilter}
                        onPress={() => setIsFilterChoose(false)}>
                        <Icon name="check" size={30} color={'#AA3FEC'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.vFilterDistance}>
                    <Text style={styles.txtTitleFilter}>Distance</Text>
                    <View style={styles.pickerDistance}>
                        <Picker
                            selectedValue={distance}
                            onValueChange={(itemValue) => setDistance(itemValue)}
                        >
                            <Picker.Item style={styles.itemPickDistance} label="0 km - 10 km" value="0" />
                            <Picker.Item style={styles.itemPickDistance} label="10 km - 50 km" value="1" />
                            <Picker.Item style={styles.itemPickDistance} label="50 km - 100 km" value="2" />
                            <Picker.Item style={styles.itemPickDistance} label="> 100 km" value="3" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.vFilterGender}>
                    <Text style={styles.txtTitleFilter}>Gender</Text>
                    <View style={styles.subFilterGender}>
                        <TouchableOpacity
                            style={getGenderButtonStyle('male')}
                            onPress={() => setGender('male')}
                        >
                            <Text style={getGenderTextStyle('male')}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={getGenderButtonStyle('female')}
                            onPress={() => setGender('female')}
                        >
                            <Text style={getGenderTextStyle('female')}>Woman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={getGenderButtonStyle('non-binary')}
                            onPress={() => setGender('non-binary')}
                        >
                            <Text style={getGenderTextStyle('non-binary')}>Non-binary</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.vFilterAge}>
                    <Text style={styles.txtTitleFilter}>Age</Text>
                    <View style={styles.vChooseAge}>
                        <MultiSlider
                            values={age}
                            onValuesChange={(values) => setAge(values)}
                            min={18}
                            max={80}
                            step={10}
                            selectedStyle={{ backgroundColor: "#AA3FEC", }}
                            unselectedStyle={{ backgroundColor: "#ccc", }}
                            markerStyle={{ backgroundColor: "#AA3FEC", }}
                            customMarker={(e) => <CustomMarker currentValue={e.currentValue} />}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

    const screenMain = (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.homeTop}>
                    <View style={styles.vImgTop}>
                        <Image source={require('../../assets/images/home/logo.png')}
                            style={styles.logo}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnOpenFilter}
                        onPress={() => setIsFilterChoose(true)}>
                        <Icon name="filter-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.vImage}>
                        <Animated.View
                            style={{ transform: [{ translateX: animation }, { rotateZ }], }}
                        >
                            <Image source={currentImage}
                                style={styles.imgPerson}
                            />
                        </Animated.View>
                        <Text style={styles.txtName}>{name}, {inforAge}</Text>
                    </View>
                    <View style={styles.btnLike}>
                        <TouchableOpacity style={styles.btnNo}
                            onPress={handleNo}
                            activeOpacity={1}>
                            <Icon name="close" size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnYes}
                            onPress={handleYes}
                            activeOpacity={1}>
                            <Icon name="heart" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>            
        </SafeAreaView>
    );

    return (
        <View style={styles.container}>
            {screenMain}
            {isFilterChoose && (
                <Modal transparent={true} animationType="fade" visible={isFilterChoose}>
                    <View style={styles.overlay}>
                        <View style={styles.modalContainer}>
                            {filter}
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    subContainer: {
        marginTop: '20%',
        marginHorizontal: '10%',
        flex: 1,
        gap: 20,
        position: 'relative',
    },
    homeTop: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 40,
        position: 'relative',
    },
    vImgTop: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnOpenFilter: {
        position: 'absolute',
        right: 0,
    },
    content: {
        gap: 20,
    },
    vImage: {
        width: '100%',
        height: 538,
        borderRadius: 35,
        position: 'relative',
    },
    txtName: {
        position: 'absolute',
        left: '10%',
        bottom: '10%',
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imgPerson: {
        width: '100%',
        height: 538,
        borderRadius: 35,
    },
    btnLike: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnNo: {
        backgroundColor: '#FF2D2D',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnYes: {
        backgroundColor: '#AA3FEC',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerFilter: {
        width: '100%',
        backgroundColor: '#fff',
        elevation: 600,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    subContainerFilter: {
        width: '80%',
        gap: 20,
        paddingBottom: 30,
    },
    vBtnFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    btnFilter: {
        marginTop: 10,
        paddingVertical: 10,
    },
    vFilterGender: {
        width: '100%',
    },
    txtTitleFilter: {
        marginVertical: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    subFilterGender: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
    },
    btnGender: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
    },
    btnGenderSelected: {
        backgroundColor: '#AA3FEC',
    },
    btnGenderNoSelected: {
        backgroundColor: '#F3F3F3',
    },
    txtBtnGender: {
        textAlign: 'center',
        color: '#CACACA',
    },
    txtBtnGenderSelected: {
        color: '#fff',
    },
    txtBtnGenderNoSelected: {
        color: '#CACACA',
    },
    pickerDistance: {
        borderWidth: 1,
        borderColor: '#CACACA',
        borderRadius: 12,
    },
    itemPickDistance: {
        color: '#565656',
        fontSize: 14,
    },
    vChooseAge: {
        width: '100%',
        alignItems: 'center',
    },
    itemValueAge: {
        alignItems: 'center',
        paddingBottom: '30%',
    },
    ageValue: {
        fontSize: 14,
        color: '#686868',
    },
    ageValueDot: {
        width: 10,
        height: 10,
        borderRadius: 15,
        backgroundColor: '#AA3FEC',
    },
});