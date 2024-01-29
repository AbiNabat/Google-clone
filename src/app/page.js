import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Logo from '../../public/logo.png'
import HomeSearch from "@/components/HomeSearch";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <>
       <HomeHeader/>
        <div className='flex flex-col items-center mt-24'>
            <Image src={Logo} alt={'logo'} width={300} height={300} priority style={{width: 'auto', height:'auto'}}  />
        </div>

       <HomeSearch/>

       <Footer/>

   </>
  );
}
