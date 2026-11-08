import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [mensaje, setMensaje] = useState('Bienvenida');
  const [rutaConsultada, setRutaConsultada] = useState(false);
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.jpeg')} 
        style={styles.imagenLocal} 
      />
      <Text style={styles.title}>
        {mensaje} 
      </Text>
      <Text style={styles.statusText}>
        {rutaConsultada ? 'Ruta consultada' : 'Ruta no consultada'}
      </Text>
      <Pressable onPress={() => {setMensaje('consultando ruta'); 
                                setRutaConsultada(true); 
                                router.push('/promotoria');}} // router.push('/ruta'): Le indica a Expo Router que apile la nueva pantalla (src/app/ruta.tsx) sobre la actual. Esto genera automáticamente una animación de transición y un botón de "Atrás" (flecha superior) para regresar a la pantalla principal.
      style={styles.routeButton}> 
        <Image 
          source={require('../../assets/images/google-tile.webp')} 
          style={styles.buttonIcon} 
        />
        <Text style={styles.routeButtonText}>Ver mi ruta</Text>
      </Pressable>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  routeButton:{
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  routeButtonText:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  statusText: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 20,
    fontWeight: '500',
  },
  imagenLocal: {
    width: 150,
    height: 150,
    borderRadius: 75, // Opcional: para hacerla circular
    alignSelf: 'center'
  },
  buttonIcon: {
    width: 24,                // Ancho pequeño para que funcione como ícono
    height: 24,               // Alto pequeño
    resizeMode: 'contain',
  }
});
