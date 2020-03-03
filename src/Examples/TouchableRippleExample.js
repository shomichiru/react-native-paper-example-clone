import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableRipple, withTheme, Paragraph } from "react-native-paper";
class RippleExample extends React.Component {
  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <TouchableRipple
          style={styles.ripple}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View pointerEvents="none">
            <Paragraph>Press anywhere</Paragraph>
          </View>
        </TouchableRipple>
      </View>
    );
  }
}
RippleExample.title = "TouchableRipple";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ripple: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default withTheme(RippleExample);
