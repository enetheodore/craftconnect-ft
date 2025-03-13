import React from 'react'

import { Box, Card } from '@mui/material'
import { CarCrash } from '@mui/icons-material'
import CardComp from '../general/CardComp'
import CardWithChart from '../general/CardWithChart'
import { useTranslation } from 'react-i18next'
const DashboardContent = () => {
   const { t } = useTranslation()
   return (
      <Box sx={{ display: "grid", gridTemplateColumns: { sm: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", gap: "20px" } }}>
         <CardComp>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingInline: "20px" }}>
               <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                  {/* <CarCrash /> */}
                  <p>{t('product')}</p>
                  <h1>768</h1>
                  <p>+26%</p>
               </Box>
               <CardWithChart />
            </Box>
         </CardComp>

         <CardComp>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingInline: "20px" }}>
               <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                  {/* <CarCrash /> */}
                  <p>{t('product')}</p>
                  <h1>768</h1>
                  <p>+26%</p>
               </Box>
               <CardWithChart />
            </Box>
         </CardComp>
         <CardComp>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingInline: "20px" }}>
               <Box sx={{ display: "flex", gap: "5px", flexDirection: "column" }}>
                  {/* <CarCrash /> */}
                  <p>{t('product')}</p>
                  <h1>768</h1>
                  <p>+26%</p>
               </Box>
               <CardWithChart />
            </Box>
         </CardComp>



      </Box>
   )
}

export default DashboardContent
