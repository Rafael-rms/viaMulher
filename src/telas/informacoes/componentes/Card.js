import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";


export default function Card({ texto, onPress }) {
  return (
    <View style={Estilos.card}>
        <ScrollView>
            <Text style={Estilos.texto}>{texto}</Text>
        </ScrollView>
      <TouchableOpacity onPress={onPress} >
        <Text style={Estilos.botao}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const Estilos = StyleSheet.create({
  card: {
    backgroundColor: '#EDCECE',
    alignItems:'center',
    padding: 10,
    width:'90%',
    height: '82%',
    position:'relative',
    borderRadius:20,
    marginTop:10,
  },
  texto:{
    fontSize:20,
    textAlign:'justify'
  },
  botao:{
    justifyContent:'center',
    backgroundColor:'#D69595',
    width:50,
    height:'auto',
    marginTop:10,
    borderRadius:5,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  }
});
