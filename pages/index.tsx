import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import MainHeader from '../components/Home/MainHeader'
import BolsasDeEmpleo from '../components/Home/BolsasDeEmpleo'
import SobreNosotros from '../components/Home/SobreNosotros'

export default function Home() {
  return (
  
      <div className="flex flex-col items-center  font-mono text-sm bg-gradient-to-r from-gray-700 to-cyan-950 ">
        <MainHeader/>
        <BolsasDeEmpleo/>
        <SobreNosotros/>
      </div>
  )
}
