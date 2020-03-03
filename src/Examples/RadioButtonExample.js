import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Paragraph,
  RadioButton,
  Colors,
  TouchableRipple,
  withTheme
} from "react-native-paper";
class RadioButtonExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "normal"
    };
  }
  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: background
          }
        ]}
      >
        <TouchableRipple onPress={() => this.setState({ checked: "normal" })}>
          <View style={styles.row}>
            <Paragraph>Normal - Android</Paragraph>
            <View pointerEvents="none">
              <RadioButton.Android
                value="normal"
                status={
                  this.state.checked === "normal" ? "checked" : "unchecked"
                }
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => this.setState({ checked: "normal-ios" })}
        >
          <View style={styles.row}>
            <Paragraph>Normal 2 - IOS</Paragraph>
            <View pointerEvents="none">
              <RadioButton.IOS
                value="normal-ios"
                status={
                  this.state.checked === "normal-ios" ? "checked" : "unchecked"
                }
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => this.setState({ checked: "custom" })}>
          <View style={styles.row}>
            <Paragraph>Custom</Paragraph>
            <View pointerEvents="none">
              <RadioButton
                value="custom"
                color={Colors.blue500}
                status={
                  this.state.checked === "custom" ? "checked" : "unchecked"
                }
              />
            </View>
          </View>
        </TouchableRipple>
        <View style={styles.row}>
          <Paragraph>Checked (Disabled)</Paragraph>
          <RadioButton value="first" status="checked" disabled />
        </View>
        <View style={styles.row}>
          <Paragraph>Unchecked (Disabled)</Paragraph>
          <RadioButton value="second" status="unchecked" disabled />
        </View>
      </View>
    );
  }
}
RadioButtonExample.title = "Radio Button";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});
export default withTheme(RadioButtonExample);
