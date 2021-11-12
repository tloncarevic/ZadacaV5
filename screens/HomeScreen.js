import React from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";

export function HomeScreen({ route, navigation }) {
  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <Text>Početni zaslon</Text>
      <ScrollView style={styles.container}>
        <Image style={styles.header} source={require("../assets/dune-header.jpg")} />
        <Text style={styles.title}>DUNE (2021)</Text>
        <Text style={styles.description}>A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.—Warner Bros.</Text>
        <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this movie as Viewed.")} />

        <Image style={styles.header} source={require("../assets/loki-header.jpg")} />
        <Text style={styles.title}>LOKI (2021)</Text>
        <Text style={styles.description}>The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”</Text>
        <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this series as Viewed.")} />

        <Image style={styles.header} source={require("../assets/wandavision-header.jpg")} />
        <Text style={styles.title}>WANDAVISION (2021)</Text>
        <Text style={styles.description}>Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.</Text>
        <Button title="Mark as viewed" onPress={() => Alert.alert("You have marked this series as Viewed.")} />
    </ScrollView>

      <Button
        title="Uređivanje postavki"
        onPress={handleSettingsPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff4e6",
  },
  header: {
    maxWidth: "100%",
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
});
