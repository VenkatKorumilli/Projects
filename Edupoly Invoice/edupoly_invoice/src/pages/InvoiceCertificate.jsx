import React from 'react';
import { Document, Page, Text, View, StyleSheet,Image } from '@react-pdf/renderer';
import logo from "../assets/edupoly.png"
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#333',
  },
  section: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    width: 120,
    color: '#0b5394',
  },
  value: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#0b5394',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
    logo: {
    width: 100,
    height: 'auto',
  },
});

const InvoiceCertificate = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Image src={logo} style={styles.logo} />
      </View>
      <Text style={styles.header}>Invoice Details</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Fullname:</Text>
        <Text style={styles.value}>{data.fullname || '-'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>{data.phone || '-'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{data.emailID || '-'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Technology:</Text>
        <Text style={styles.value}>{data.tech || '-'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label }>Amount Paid:</Text>
        <Text style={styles.value}>{data.amount || '-'}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{data.date || '-'}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoiceCertificate;
