import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
  imageStyle: {
    width: 250,
    height: 180,
    borderRadius: 8,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 15
  }
});

export default ResultsDetail;
