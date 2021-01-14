import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from './components/HeaderBar'
import AdBanner from './components/AdBanner'
import ProductBanner from './components/ProductBanner';

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <HeaderBar />
    <AdBanner />
    <ProductBanner />
  </SafeAreaView>
)

export default Home