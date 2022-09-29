import React from 'react'
import Saleproduct from '../pages/Saleproduct/Saleproduct'
import Banner from '../pages/Website/Banner/Banner'
import Banner2 from '../pages/Website/Banner2/Banner2'
import Category from '../pages/Website/Category/Category'
import Phukienkhac from '../pages/Website/phukienkhac/Phukienkhac'
import Sanphammoi from '../pages/Website/Sanphammoi/Sanphammoi'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <Sanphammoi/>
      <Phukienkhac/>
      <Banner2/>
      <Saleproduct/>
      </div>
  )
}

export default HomePage