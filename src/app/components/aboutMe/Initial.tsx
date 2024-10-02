

export default function Initial() {

  return (
    <div className="flex flex-col py-28 gap-2">
      <div className="flex flex-row items-center gap-4 py-4">
        <img
          src="/mini.webp"
          alt=""
          className="size-20 rounded-full"
        />
        <a
          href="#contact"
          className="bg-[#1f2937e6] rounded-full justify-start h-7 w-52 text-center border border-green-400"
        >Disponible para trabajar
        </a>
      </div>
      <h2 className="text-5xl font-bold">Hola, soy Leal</h2>
      <p className="text-2xl w-2/3">
        Estudiante de <span className="text-[#f3c242] font-semibold">Ingenieria de Sistemas y Computo</span> en
        <span className="text-[#f3c242] font-semibold"> la Universidad de Caldas</span> de Manizales.
        Especializado en Desarrollo Front-End.
      </p>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row border border-gray-500 rounded-full w-28 gap-1 
      justify-center bg-[#1f2937e6] hover:text-[#f3c242] hover:cursor-pointer text-white">
          <img src="/linkedinLogo.svg" alt="" className="w-6" />
          <a
            href="https://www.linkedin.com/in/alejandro-leal-gonzalez-86404223b"
            target={"_blank"}
            rel={"noreferrer"}
          >Linkedin
          </a>
        </div>
        <div className="flex flex-row border border-gray-500 rounded-full w-28 gap-1 
      justify-center bg-[#1f2937e6] hover:text-[#f3c242] hover:cursor-pointer text-white">
          <img src="/githubLogo.svg" alt="" className="w-5" />
          <a
            href="https://www.github.com/AlejandroLealG"
            target={"_blank"}
            rel={"noreferrer"}
          >GitHub
          </a>
        </div>
      </div>

    </div>
  );
}