import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from '../../game/entities';
import { useState, useEffect } from 'react';
import Physics from '../../game/utils/physics';
import Header from '../header/Header';

export default function Game() {
  const [running, setRunning] = useState(false)
  useEffect(() => {
    setRunning(true)
  }, [])
  return (
    <>
    <View style={styles.header}>
        <Header />
    </View>
    <View style={styles.content}>
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running = {running}
        style={{position: 'relative', top: 0, left: 0, bottom: 0, right: 0,}}
      >
      </GameEngine>
    <StatusBar style="auto" hidden={true}/>
    </View> 
    </>
  );
}

const styles = StyleSheet.create({
    content:{
      flex: 10,
      border: 5,
      backgroundColor: "darkturquoise" 
    },
    header:{
      flex: 1,
    }
  })