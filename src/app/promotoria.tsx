// src/app/promotoria.tsx
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecciona un lenguaje:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="TypeScript" value="ts" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
    paddingTop: 60 // Espacio para que no choque con la barra superior del celular
  },
  label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
  pickerContainer: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8,}
});