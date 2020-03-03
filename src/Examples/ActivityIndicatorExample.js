import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors, FAB, withTheme } from "react-native-paper";

class ActivityIndicatorExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true
    };
  }
  render() {
    const {
      theme: {
        colors: { background }
      }
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <View style={styles.row}>
          <FAB
            small
            icon={this.state.animating ? "pause" : "play"}
            onPress={() => {
              this.setState({
                animating: !this.state.animating
              });
            }}
          />
        </View>

        <View style={styles.row}>
          <ActivityIndicator animating={this.state.animating} />
        </View>

        <View style={styles.row}>
          <ActivityIndicator
            animating={this.state.animating}
            hidesWhenStopped={false}
          />
        </View>

        <View style={styles.row}>
          <ActivityIndicator animating={this.state.animating} size="large" />
        </View>

        <View style={styles.row}>
          <ActivityIndicator
            animating={this.state.animating}
            color={Colors.red500}
          />
        </View>
      </View>
    );
  }
}
ActivityIndicatorExample.title = "Activity Indicator";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  }
});
export default withTheme(ActivityIndicatorExample);
