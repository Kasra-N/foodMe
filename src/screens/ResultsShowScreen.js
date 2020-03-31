import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.textStyle}>
        {result.name} {result.price}
      </Text>
      <FlatList
        keyExtractor={photo => photo}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.detailStyle}>Average rating: {result.rating}/5</Text>
      <Text style={styles.detailStyle}>
        Review count: {result.review_count}
      </Text>
      <Text style={styles.detailStyle}>Phone: {result.display_phone}</Text>
      <Text style={styles.detailStyle}>{result.location.address1}</Text>
      <Text style={styles.detailStyle}>{result.location.city} {result.location.zip_code}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 320,
    height: 240,
    margin: 10
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10
  },
  detailStyle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5
  }
});

export default ResultsShowScreen;
