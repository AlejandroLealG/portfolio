import Header from '@/app/components/header/Header'
import Initial from '@/app/components/sobreMi/Initial'

export default function Home() {
  return (
    <main className='h-[3500px] '>
      <Header />
      <div className='sm:px-12 lg:px-20 xl:px-44'>
        <Initial />
        <p>cualidades</p>
        <p>proyectos</p>
        <p>sobre mi</p>
        <p>contacto</p>
      </div>
      <p>footer</p>
    </main>
  );
}
