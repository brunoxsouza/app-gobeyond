import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import HeaderBar from './components/HeaderBar'
import PrimaryBannerSlider from './components/PrimaryBannerSlider'
import SecondBanner from './components/SecondBanner'
import FourthBanner from './components/FourthBanner'

import services from '../../services'

const Home = () => {
  const [banners, setBanners] = useState([])

  useEffect(async () => {

    var response

    try {
      response = await services.getBanners()
    } catch (error) {
      console.log(error)
    }

    const { data, status } = response

    setBanners(data)
  }, [])

  console.log(banners)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar />
      <ScrollView>
        <PrimaryBannerSlider data={banners[0]?.data || []} />
        <SecondBanner data={banners[1]?.data || []} />
        <FourthBanner data={banners[3]?.data || []} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home