import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { leiMariaDaPenha, leiDoFeminicidio, outraLei } from '../../../mocks/Informacoes';

const { width } = Dimensions.get('window');

const CarrosselC = ({abrirCard}) => {
  return (
    <Swiper 
      style={styles.carrossel}  
      showsButtons={false}
      dotStyle={styles.inativo} 
      activeDotStyle={styles.ativo} 
      autoplay={true} 
      autoplayTimeout={5}
    >
      <TouchableOpacity 
      onPress={()=>abrirCard(leiMariaDaPenha)}
      style={[styles.slide,{width: width * 0.9 }]}>
          <Text style={styles.texto}>Lei Maria da Penha</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>abrirCard(leiDoFeminicidio)}
      style={[styles.slide,{width: width * 0.9 }]}>
          <Text style={styles.texto}>Lei do Feminicídio</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>abrirCard(outraLei)}
      style={[styles.slide,{width: width * 0.9 }]}>
        <Text style={styles.texto}>Outra Lei</Text>
      </TouchableOpacity>      
    </Swiper>
  );
};

const styles = StyleSheet.create({
  carrossel: {
    height: 95,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDCECE',
    width:'90%',
    alignSelf:'center',
    borderRadius:40
  },
  texto:{
    fontSize:25,
    marginBottom:20

  },
  inativo: {
    backgroundColor: 'gray',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3
  },
  ativo: {
    backgroundColor: '#D69595',
    width: 16,
    height: 16,
    borderRadius: 8,
    margin: 3
  },
});

export default CarrosselC;
