import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <ScrollView>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style={styles.textStyle}>Total Result: {results.length}</Text>

        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="A Bit Pricier"
        />
        <ResultsList results={filterResultsByPrice("$$$")} title="Getting Pricey" />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Take All My Money"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    margin: 15
  }
});

export default SearScreen;
