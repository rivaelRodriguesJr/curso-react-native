import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Inverter, { MegaSena } from './components/Multi';
import Contador from './components/Contador';
import Platafromas from './components/Platafromas';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import Avo from './components/ComunicacaoDireta';
import TextoSincronizado from './components/ComunicacaoIndireta';
import ListaFlex from './components/ListaFlex';
import Flex from './components/Flex';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator drawerStyle={{width: 300}}>  */}
      <Drawer.Navigator>
        <Drawer.Screen name='Flex'>
          {() => <Flex />}
        </Drawer.Screen>
        <Drawer.Screen name='Lista (Flex Box)'>
          {() => <ListaFlex />}
        </Drawer.Screen>
        <Drawer.Screen name='Comunicação Indireta'>
          {() => <TextoSincronizado />}
        </Drawer.Screen>
        <Drawer.Screen name='Comunicação Direta'>
          {() => <Avo nome='João' sobrenome='Silva' />}
        </Drawer.Screen>
        <Drawer.Screen name='Evento'>
          {() => <Evento />}
        </Drawer.Screen>
        <Drawer.Screen name='Validar Props'>
          {() => <ValidarProps ano={20} />}
        </Drawer.Screen>
        <Drawer.Screen name='Plataformas'>
          {() => <Platafromas />}
        </Drawer.Screen>
        <Drawer.Screen name='Contador'>
          {() => <Contador numeroInicial={1000} />}
        </Drawer.Screen>
        <Drawer.Screen name='Mega Sena'>
          {() => <MegaSena numeros={8} />}
        </Drawer.Screen>
        <Drawer.Screen name='Inverter'>
          {() => <Inverter texto='React Nativo!' />}
        </Drawer.Screen>
        <Drawer.Screen name={'Par & Ímpar'}>
          {() => <ParImpar numero={3} />}
        </Drawer.Screen>
        <Drawer.Screen name='Simples'  >
          {() => <Simples texto='Flexível!!!' />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
