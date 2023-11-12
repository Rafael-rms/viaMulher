import React from "react";
import Rotas from "./src/rotas/Rotas"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor='#FECDCD'/> */}
      <StatusBar backgroundColor='#FFD6D6'/>
      {/* <StatusBar backgroundColor='#FEBEBE'/> */}
      <Rotas />
    </SafeAreaView>
  );
}

