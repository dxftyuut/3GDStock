import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { router } from 'expo-router';

const materiais = [
  {
    id: '1',
    nome: 'Cimento CP 50kg',
    codigo: 'CMN001',
    categoria: 'Materiais básicos',
    unidade: 'Saco',
    estoqueAtual: '120 unidades',
    estoqueMinimo: '30 unidades',
    ultimaAtualizacao: '01/01/2026 00:00',
    descricaoCurta:
      'Saco de cimento Portland composto utilizado em obras para preparação de concreto e argamassa.',
    descricaoCompleta:
      'Saco de cimento Portland composto utilizado na preparação de concreto, argamassa e outras aplicações na construção civil. Garante alta resistência e durabilidade nas estruturas.',
    fornecedorNome: 'ConstruG Materiais',
    fornecedorTelefone: '(19) 99123-4567',
  },
];

export default function HomeScreen() {
  function abrirMaterial(material: any) {
    router.push({
      pathname: '/material-detalhes',
      params: material,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Materiais
          </Text>
        </View>

        <FlatList
          data={materiais}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.materialCard}
              activeOpacity={0.8}
              onPress={() => abrirMaterial(item)}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="sack"
                  size={45}
                  color="#111"
                />
              </View>

              <View style={styles.materialInfo}>
                <Text style={styles.materialName}>
                  {item.nome}
                </Text>

                <View style={styles.stockBadge}>
                  <View style={styles.stockDot} />

                  <Text style={styles.stockText}>
                    Em estoque
                  </Text>
                </View>

                <Text style={styles.materialDescription}>
                  {item.descricaoCurta}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#233F66"
              />
            </TouchableOpacity>
          )}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E9EDF3',
  },

  container: {
    flex: 1,
    backgroundColor: '#E9EDF3',
  },

  header: {
    height: 60,
    backgroundColor: '#233F66',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },

  list: {
    padding: 12,
  },

  materialCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#DDE3EC',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  materialInfo: {
    flex: 1,
    marginLeft: 10,
    marginRight: 5,
  },

  materialName: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '700',
  },

  stockBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9F8E4',
    borderWidth: 1,
    borderColor: '#54B979',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 3,
    marginBottom: 4,
  },

  stockDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#1DA44D',
    marginRight: 4,
  },

  stockText: {
    color: '#16883B',
    fontSize: 9,
    fontWeight: '600',
  },

  materialDescription: {
    color: '#444444',
    fontSize: 10,
    lineHeight: 13,
  },
});
