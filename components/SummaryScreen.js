import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mockTransactions = [
  { id: '1', name: 'Grocery Shopping', amount: 85.50, date: '2024-10-28', category: 'Food' },
  { id: '2', name: 'Movie Tickets', amount: 30.00, date: '2024-10-29', category: 'Entertainment' },
  { id: '3', name: 'Gas Station', amount: 45.75, date: '2024-10-29', category: 'Transportation' },
  { id: '4', name: 'Coffee Shop', amount: 12.25, date: '2024-10-30', category: 'Food' },
  { id: '5', name: 'Online Course', amount: 199.99, date: '2024-10-30', category: 'Education' },
];

export default function SummaryScreen() {
  const totalExpenses = mockTransactions.reduce((sum, item) => sum + item.amount, 0);
  
  const categoryTotals = mockTransactions.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Summary</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Expenses</Text>
        <Text style={styles.totalAmount}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <Text style={styles.sectionTitle}>Expenses by Category</Text>
      {Object.entries(categoryTotals).map(([category, amount]) => (
        <View key={category} style={styles.categoryItem}>
          <Text style={styles.categoryName}>{category}</Text>
          <Text style={styles.categoryAmount}>${amount.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  categoryName: {
    fontSize: 16,
    color: '#34495e',
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});