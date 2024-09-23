import Header from '@/app/components/header/Header'
import Initial from '@/app/components/aboutMe/Initial'
import Qualities from '@/app/components/qualities/Qualities'
import Footer from '@/app/components/footer/Footer';

export default function Home() {
  return (
    <main className='h-[3500px] '>
      <Header />
      <div className='sm:px-12 lg:px-20 xl:px-44'>
        <Initial />
        <Qualities />
        <p>proyectos</p>
        <p>sobre mi</p>
        <p>contacto</p>
      </div>
      <Footer />
    </main>
  );
}
