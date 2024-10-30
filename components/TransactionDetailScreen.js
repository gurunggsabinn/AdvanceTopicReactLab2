import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{transaction.name}</Text>
          <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={24} color="#6c757d" />
          <Text style={styles.detailText}>{transaction.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Ionicons name="pricetag-outline" size={24} color="#6c757d" />
          <Text style={styles.detailText}>{transaction.category}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    margin: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    flex: 1,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  divider: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    color: '#495057',
    marginLeft: 12,
    flex: 1,
  },
});