import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeaderComponent from '@/components/header'
import SearchComponent from '@/components/search'
import FooterComponent from '@/components/footer'
import ContentComponent from '@/components/content'
import DasboardComponent from '@/components/dasboard'
import CourseslistComponent from '@/components/courseslist'
import UnivercitysComponent from '@/components/univercitys'
import EnviromentComponent from '@/components/enviroment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>

    <HeaderComponent></HeaderComponent>
    <SearchComponent></SearchComponent>
    <ContentComponent></ContentComponent>
    <DasboardComponent></DasboardComponent>
    <CourseslistComponent></CourseslistComponent>
    <UnivercitysComponent></UnivercitysComponent>
    <EnviromentComponent></EnviromentComponent>
    <FooterComponent></FooterComponent>
    </div>
   
    </>
   
  )
}
