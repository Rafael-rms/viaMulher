import React from 'react';
import { Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { casaDaMulher, delegaciaDaMulher, justiceiras } from '../../../mocks/Informacoes';

const CarrosselB = ({ abrirCard }) => {
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
        onPress={() => abrirCard(justiceiras)}
        style={styles.slide}>
        <Image
          style={styles.imagem}
          source={require('../../../assets/justiceiras.png')} />
        <Text style={styles.texto}>Justiceiras</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => abrirCard(casaDaMulher)}
        style={styles.slide}>
        <Image
          style={styles.imagem}
          source={require('../../../assets/casaDaMulher.png')} />
        <Text style={styles.texto}>Casa da Mulher</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => abrirCard(delegaciaDaMulher)}
        style={styles.slide}>
        <Image
          style={styles.imagem}
          source={require('../../../assets/delegaciaDaMulher.png')} />
        <Text style={styles.texto}>Delegacia Da Mulher</Text>
      </TouchableOpacity>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  carrossel: {
    height: 350,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDCECE',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 60
  },
  texto: {
    fontSize: 20,
    backgroundColor: '#D69595',
    height: 'auto',
    width: 250,
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 50

  },
  imagem: {
    height: 231,
    width: 235,
    marginBottom: 20
  },
  inativo: {
    backgroundColor: 'gray',
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
  },
  ativo: {
    backgroundColor: '#D69595',
    width: 16,
    height: 16,
    borderRadius: 8,
    margin: 3,
  },
});

export default CarrosselB;
