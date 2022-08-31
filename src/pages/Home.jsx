import React from 'react'
import {useTranslation} from "react-i18next"
function Home() {
  const {t} = useTranslation(["home"])
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>{t("home")}</h1>
    </div>
  )
}

export default Home