import * as React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Colors, withTheme } from "react-native-paper";

class ButtonExample extends React.Component {
  render() {
    const { colors } = this.props.theme;
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <IconButton icon="camera" size={24} onPress={() => {}} />
        <IconButton
          icon="lock"
          size={24}
          color={Colors.green500}
          onPress={() => {}}
        />
        <IconButton icon="camera" size={36} onPress={() => {}} />
        <IconButton
          icon="lock"
          size={36}
          onPress={() => {}}
          style={{ backgroundColor: Colors.lightGreen200 }}
        />
        <IconButton icon="heart" size={60} onPress={() => {}} />
      </View>
    );
  }
}
ButtonExample.title = "Icon Button";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8
  }
});
export default withTheme(ButtonExample);
