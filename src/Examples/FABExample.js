import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, FAB, Portal, withTheme } from "react-native-paper";

class ButtonExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      open: false
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
            icon={this.state.visible ? "eye-off" : "eye"}
            style={styles.fab}
            onPress={() => {
              this.setState({
                visible: !this.state.visible
              });
            }}
          />
        </View>

        <View style={styles.row}>
          <FAB
            icon="heart"
            style={styles.fab}
            onPress={() => {}}
            visible={this.state.visible}
          />
          <FAB
            icon="check"
            label="Extended FAB"
            style={styles.fab}
            onPress={() => {}}
            visible={this.state.visible}
          />
          <FAB
            icon="cancel"
            label="Disabled FAB"
            style={styles.fab}
            onPress={() => {}}
            visible={this.state.visible}
            disabled
          />

          <FAB
            icon="cancel"
            label="Loading FAB"
            style={styles.fab}
            onPress={() => {}}
            visible={this.state.visible}
            loading
          />
          <Portal>
            <FAB.Group
              open={this.state.open}
              icon={this.state.open ? "calendar-today" : "plus"}
              actions={[
                { icon: "plus", onPress: () => {} },
                { icon: "star", label: "Star", onPress: () => {} },
                { icon: "email", label: "Email", onPress: () => {} },
                { icon: "bell", label: "Remind", onPress: () => {} }
              ]}
              onStateChange={({ open }) => this.setState({ open })}
              onPress={() => {
                if (this.state.open) {
                  // do something if the speed dial is open
                }
              }}
              visible={this.state.visible}
            />
          </Portal>
        </View>
      </View>
    );
  }
}
ButtonExample.title = "Floating Action Button";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey200,
    padding: 4
  },
  row: {
    justifyContent: "center",
    alignItems: "center"
  },
  fab: {
    margin: 8
  }
});
export default withTheme(ButtonExample);
