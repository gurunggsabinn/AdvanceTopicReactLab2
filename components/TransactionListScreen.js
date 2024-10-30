import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const mockTransactions = [
  { id: '1', name: 'Grocery Shopping', amount: 85.50, date: '2024-10-28', category: 'Food' },
  { id: '2', name: 'Movie Tickets', amount: 30.00, date: '2024-10-29', category: 'Entertainment' },
  { id: '3', name: 'Gas Station', amount: 45.75, date: '2024-10-29', category: 'Transportation' },
  { id: '4', name: 'Coffee Shop', amount: 12.25, date: '2024-10-30', category: 'Food' },
  { id: '5', name: 'Online Course', amount: 199.99, date: '2024-10-30', category: 'Education' },
];

export default function TransactionListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.transactionItem} 
      onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={getCategoryIcon(item.category)} size={24} color="#007AFF" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Electronics': return 'hardware-chip-outline';
      case 'Clothing': return 'shirt-outline';
      case 'Food': return 'fast-food-outline';
      case 'Housing': return 'home-outline';
      default: return 'cart-outline';
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockTransactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E1F5FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  transactionDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});