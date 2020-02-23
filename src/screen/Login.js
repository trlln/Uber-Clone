import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

const window = Dimensions.get('window')

const Login = ({

}) => {
    return (
        <View style={styles.view}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/login_bg.jpg')}
            >
                <View style={
                    styles.uberOuterBox
                }>
                    <View style={styles.uberInnerBox}>
                        <Text style={styles.uberText}>
                            UBER
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={{
                        height: 150,
                        backgroundColor: '#ffffff',
                        alignItems: 'flex-start',
                        paddingHorizontal: 25,
                    }}>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 24, }}>
                                Get moving with Uber
                            </Text>
                        </View>

                        <TouchableOpacity>
                            <View style={
                                {
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }
                            }>
                                <Image
                                    source={
                                        require('../../assets/india.png')
                                    }
                                    style={{
                                        height: 24,
                                        width: 24,
                                        resizeMode: 'contain'
                                    }}
                                />
                                {/* <View style={{ flex: 1, flexDirection: 'row' }}> */}

                                <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
                                    +91
                                </Text>

                                <TextInput style={{flex: 1, fontSize: 20}}
                                placeholder="Enter your Mobile number"
                                underlineColorAndroid="transparent"
                                />
                                {/* </View> */}

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={
                        styles.footerText
                    }>
                        Or connect using a social account
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    backgroundImage: {
        height: window.height,
        width: window.width,
    },
    uberOuterBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uberInnerBox: {
        backgroundColor: "#ffffff",
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uberText: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    footer: {
        height: 70,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderTopColor: '#e8e8ec',
        borderWidth: 1,
        paddingHorizontal: 25
    },
    footerText: {
        color: '#5a7fdf',
        fontWeight: 'bold',
    }
})

export default Login;
