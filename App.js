/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SectionList
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  // static propTypes = {
  //   urlQuery
  // }

  //1.mounting:
  //initialzation--->componentWillMount--->render--->componentDidMount
  //props change:
  //componentWillReceiveProps--->shouldComponentUpdate--->componentWillUpdate--->render--->componentDidUpdate
  //state change:
  //shouldComponentUpdate--->componentWillUpdate--->render--->componentDidUpdate
  //unmounting:componentWillUnmount
  constructor() {
    super();
    console.log("App", "constructor");
    //todo:set props & state
  }
  componentWillMount = () => {
    console.log("App", "componentWillMount");
  };
  componentDidMount() {
    console.log("App", "componentDidMount");
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("App", "shouldComponentUpdate");
  };
  componentWillUpdate() {
    console.log("App", "componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("App", "componentDidUpdate");
  }
  componentWillReceiveProps() {
    console.log("App", "componentWillReceiveProps");
  }
  componentWillUnmount = () => {
    console.log("App", "componentWillUnmount");
  };

  render() {
    console.log("App", "render");
    return (
      // <View style={styles.container}>
      <View
        style={{
          //row:horizontally; column:vertically
          flexDirection: "row",
          // distribution of children
          justifyContent: "flex-start",
          // flex: 1,
          // alignment of children
          // alignItems: "center",
          paddingTop: 100,
          backgroundColor: "#F5FCFF"
        }}
      >
        <SectionList
          // ItemSeparatorComponent={<Text style={styles.separator} />}
          style={{ height: 600 }}
          renderItem={({ item, index, section }) => (
            <Text key={index}>{item}</Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={[
            {
              title: ">>>> basic components",
              data: ["View", "Text", "Image", "TextInput", "ScrollView"]
            },
            {
              title: ">>>> user interface",
              data: ["Button", "Picker", "Slider", "Switch"]
            },
            { title: ">>>> list views", data: ["FlatList", "SectionList"] },
            {
              title: ">>>> ios components",
              data: [
                "ActionSheetIOS",
                "AlertIOS",
                "DataPickerIOS",
                "ImagePickerIOS",
                "NavigatorIOS",
                "ProgressViewIOS",
                "PushNotificationIOS",
                "SegmentedControllIOS",
                "TabBarIOS"
              ]
            },
            {
              title: ">>>> android components",
              data: [
                "BackHandler",
                "DataPickerAndroid",
                "DrawerLayoutAndroid",
                "PermissionsAndroid",
                "ProggressBarAndroid",
                "TimePickerAndroid",
                "ToastAndroid",
                "ToolbarAndroid",
                "ViewPaggerAndroid"
              ]
            },
            {
              title: ">>>> others",
              data: [
                "ActivityIndicator",
                "Alert",
                "Animated",
                "CameraRoll",
                "Clipboard",
                "KeyboardAvodingView",
                "Linking",
                "Modal",
                "PixelRatio",
                "RefreshControl",
                "StatusBar",
                "WebView"
              ]
            }
          ]}
          keyExtractor={(item, index) => item + index}
        />
        <Text style={styles.separator} />
        <FlatList
          // ItemSeparatorComponent={<Text style={styles.separator} />}
          data={[
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c",
            "a",
            "b",
            "c"
          ]}
          // extraData =
          // keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  separator: {
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
  // wrapper: {
  //   borderBottomColor: "#bbb",
  //   borderBottomWidth: StyleSheet.absoluteFill,
  //   top: 10,
  //   backgroundColor: "transparent"
  // }
});
