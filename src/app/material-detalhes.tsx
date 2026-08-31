import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { router, useLocalSearchParams } from 'expo-router';

export default function MaterialDetalhesScreen() {

  const params = useLocalSearchParams();

  const material = {
    nome: params.nome || 'Cimento CP 50kg',
    codigo: params.codigo || 'CMN001',
    categoria: params.categoria || 'Materiais básicos',
    unidade: params.unidade || 'Saco',
    estoqueAtual: params.estoqueAtual || '120 unidades',
    estoqueMinimo: params.estoqueMinimo || '30 unidades',
    ultimaAtualizacao:
      params.ultimaAtualizacao || '01/01/2026 00:00',

    descricaoCurta:
      params.descricaoCurta ||
      'Saco de cimento Portland composto utilizado em obras para preparação de concreto e argamassa.',

    descricaoCompleta:
      params.descricaoCompleta ||
      'Saco de cimento Portland composto utilizado na preparação de concreto, argamassa e outras aplicações na construção civil. Garante alta resistência e durabilidade nas estruturas.',

    fornecedorNome:
      params.fornecedorNome || 'ConstruG Materiais',

    fornecedorTelefone:
      params.fornecedorTelefone || '(19) 99123-4567',
  };

  function voltar() {
    router.back();
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        {/* ======================================
            HEADER
        ====================================== */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.headerBack}
            onPress={voltar}
          >
            <Ionicons
              name="arrow-back"
              size={23}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Detalhes do material
          </Text>

        </View>

        {/* ======================================
            CONTEÚDO
        ====================================== */}

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >

          {/* ======================================
              MATERIAL
          ====================================== */}

          <View style={styles.materialCard}>

            <View style={styles.materialImage}>

              <MaterialCommunityIcons
                name="sack"
                size={65}
                color="#111111"
              />

              <View style={styles.cloud}>
                <MaterialCommunityIcons
                  name="cloud"
                  size={34}
                  color="#111111"
                />
              </View>

            </View>

            <View style={styles.materialInfo}>

              <Text style={styles.materialName}>
                {material.nome}
              </Text>

              <View style={styles.stockBadge}>

                <View style={styles.stockDot} />

                <Text style={styles.stockText}>
                  Em estoque
                </Text>

              </View>

              <Text style={styles.shortDescription}>
                {material.descricaoCurta}
              </Text>

            </View>

          </View>

          {/* ======================================
              INFORMAÇÕES GERAIS
          ====================================== */}

          <View style={styles.sectionCard}>

            <Text style={styles.sectionTitle}>
              Informações gerais
            </Text>

            <InfoRow
              icon="tag-outline"
              label="Código"
              value={material.codigo}
            />

            <InfoRow
              icon="view-grid-outline"
              label="Categoria"
              value={material.categoria}
            />

            <InfoRow
              icon="archive-outline"
              label="Unidade"
              value={material.unidade}
            />

            <InfoRow
              icon="warehouse"
              label="Estoque atual"
              value={material.estoqueAtual}
            />

            <InfoRow
              icon="alert-outline"
              label="Estoque mínimo"
              value={material.estoqueMinimo}
            />

            <InfoRow
              icon="calendar-month-outline"
              label="Última atualização"
              value={material.ultimaAtualizacao}
              last
            />

          </View>

          {/* ======================================
              DESCRIÇÃO
          ====================================== */}

          <View style={styles.descriptionCard}>

            <Text style={styles.sectionTitle}>
              Descrição completa
            </Text>

            <Text style={styles.descriptionText}>
              {material.descricaoCompleta}
            </Text>

          </View>

          {/* ======================================
              FORNECEDORES
          ====================================== */}

          <View style={styles.supplierSection}>

            <Text style={styles.sectionTitle}>
              Fornecedores
            </Text>

            <View style={styles.supplierCard}>

              <View style={styles.supplierIcon}>

                <MaterialCommunityIcons
                  name="office-building-marker-outline"
                  size={28}
                  color="#111111"
                />

              </View>

              <View>

                <Text style={styles.supplierName}>
                  {material.fornecedorNome}
                </Text>

                <Text style={styles.supplierPhone}>
                  {material.fornecedorTelefone}
                </Text>

              </View>

            </View>

          </View>

        </ScrollView>

        {/* ======================================
            BOTÃO VOLTAR
        ====================================== */}

        <TouchableOpacity
          style={styles.bottomButton}
          activeOpacity={0.8}
          onPress={voltar}
        >

          <Ionicons
            name="arrow-back"
            size={28}
            color="#FFFFFF"
          />

          <Text style={styles.bottomButtonText}>
            VOLTAR PARA A LISTA
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}


/* ==================================================
   COMPONENTE DE INFORMAÇÃO
================================================== */

function InfoRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: any;
  label: string;
  value: any;
  last?: boolean;
}) {

  return (
    <View
      style={[
        styles.infoRow,
        last && styles.infoRowLast,
      ]}
    >

      <View style={styles.infoIcon}>

        <MaterialCommunityIcons
          name={icon}
          size={20}
          color="#202020"
        />

      </View>

      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>

    </View>
  );
}


/* ==================================================
   ESTILOS
================================================== */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#E9EDF3',
  },

  container: {
    flex: 1,
    backgroundColor: '#E9EDF3',
  },

  /* HEADER */

  header: {
    height: 58,
    backgroundColor: '#233F66',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  headerBack: {
    width: 40,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },

  /* SCROLL */

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 10,
  },

  /* MATERIAL */

  materialCard: {
    minHeight: 100,
    backgroundColor: '#F8F8F8',
    borderRadius: 9,
    padding: 8,
    flexDirection: 'row',
    marginBottom: 5,
  },

  materialImage: {
    width: 84,
    height: 84,
    borderRadius: 9,
    backgroundColor: '#DDE3EC',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  cloud: {
    position: 'absolute',
    left: 3,
    bottom: 0,
  },

  materialInfo: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 2,
  },

  materialName: {
    fontSize: 13,
    color: '#111111',
    fontWeight: '700',
    marginBottom: 2,
  },

  stockBadge: {
    alignSelf: 'flex-start',
    height: 16,
    borderRadius: 8,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9F8E4',
    borderWidth: 1,
    borderColor: '#54B979',
    marginBottom: 4,
  },

  stockDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#1DA44D',
    marginRight: 3,
  },

  stockText: {
    fontSize: 8,
    color: '#16883B',
    fontWeight: '600',
  },

  shortDescription: {
    color: '#292929',
    fontSize: 10.5,
    lineHeight: 14,
  },

  /* INFORMAÇÕES */

  sectionCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 9,
    paddingTop: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#161616',
    marginBottom: 4,
  },

  infoRow: {
    minHeight: 36,
    borderBottomWidth: 1,
    borderBottomColor: '#DFDFDF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoRowLast: {
    borderBottomWidth: 0,
  },

  infoIcon: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#E5E9EF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

  infoLabel: {
    fontSize: 9.5,
    color: '#4A4A4A',
    flex: 1,
  },

  infoValue: {
    fontSize: 9.5,
    color: '#202020',
    fontWeight: '500',
    textAlign: 'right',
    maxWidth: 150,
  },

  /* DESCRIÇÃO */

  descriptionCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 9,
    padding: 10,
    marginBottom: 5,
  },

  descriptionText: {
    fontSize: 10,
    lineHeight: 14,
    color: '#424242',
  },

  /* FORNECEDOR */

  supplierSection: {
    backgroundColor: '#F8F8F8',
    borderRadius: 9,
    padding: 10,
  },

  supplierCard: {
    height: 44,
    borderRadius: 8,
    backgroundColor: '#DCE3EE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  supplierIcon: {
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  supplierName: {
    fontSize: 9.5,
    color: '#1A1A1A',
    fontWeight: '600',
  },

  supplierPhone: {
    fontSize: 8.5,
    color: '#3F3F3F',
    marginTop: 2,
  },

  /* BOTÃO */

  bottomButton: {
    height: 59,
    backgroundColor: '#233F66',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    letterSpacing: 0.3,
  },

});
