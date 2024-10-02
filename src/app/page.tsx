import Header from '@/app/components/header/Header'
import Initial from '@/app/components/aboutMe/Initial'
import Qualities from '@/app/components/qualities/Qualities'
import Footer from '@/app/components/footer/Footer';
import Projects from '@/app/components/projects/Projects';
import AboutMe from './components/aboutMe/AboutMe';


export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='sm:px-12 lg:px-20 xl:px-44'>
        <Initial />
        <div id='qualities'>
          <h2 className='text-4xl py-6'>Cualidades</h2>
        </div>
        <Qualities />
        <div id='projects'>
          <h2 className='text-4xl py-6'>Proyectos</h2>
        </div>
        <Projects />
        <div id='aboutMe'>
          <h2 className='text-4xl py-6'>Sobre mi</h2>
        </div>
        <AboutMe />
        <div id='contact'>
          <h2 className='text-4xl py-6'>Contacto</h2>
        </div>
      </div>
      <Footer />
    </main>
  );
}
