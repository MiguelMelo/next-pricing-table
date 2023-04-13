import Image from "next/image";

import checkIcon from "@/assets/check.svg";
import infoIcon from "@/assets/info.svg";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row flex-wrap py-20 min-h-screen bg-gray-50 gap-8 items-center justify-center">
      {/* PRICING CARD #1 */}
      <section className="bg-white rounded-md border border-gray-200 transition-colors delay-100 hover:cursor-pointer hover:border-purple-100 shadow-sm w-96 h-[454px] py-12 px-8">
        <span className="uppercase text-purple-200 text-md font-semibold">
          Para você começar
        </span>

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl font-bold text-gray-800">Essentials</h1>
          <p className="text-lg font-normal text-gray-800">
            R$ <span className="text-2xl font-bold">19,97</span>
            <span className="font-bold">/mês</span>
          </p>
        </div>

        <button className="w-full my-8 py-4 transition-colors delay-100 hover:cursor-pointer hover:bg-gray-800 hover:text-white border border-gray-800 rounded font-bold text-lg text-gray-800">
          Assinar agora
        </button>

        <hr className="bg-gray-200" />

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-600 font-normal">Até 3 usuários</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-600 font-normal">Autoatendimento</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
        </div>
      </section>

      {/* PRICING CARD #2 */}
      <section className="bg-gray-900 rounded-md shadow-sm w-96 h-[454px] py-12 px-8 relative">
        {/* TAG */}
        <span className="absolute flex items-center justify-center -top-4 right-0 left-0 mx-auto bg-orange-500 w-32 h-8 rounded uppercase text-sm font-bold text-gray-900">
          Mais vantajoso
        </span>

        <span className="uppercase text-purple-100 text-md font-semibold">
          Para você decolar
        </span>

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl font-bold text-gray-50">Ultimate</h1>
          <p className="text-lg font-normal text-gray-50">
            R$ <span className="text-2xl font-bold">19,97</span>
            <span className="font-bold">/mês</span>
          </p>
        </div>

        <button className="w-full my-8 py-4 transition-colors delay-100 hover:cursor-pointer hover:bg-purple-200 bg-purple-100 border border-gray-800 rounded font-bold text-lg text-white">
          Assinar agora
        </button>

        <hr className="bg-gray-200" />

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-300 font-normal">Usuários ilimitados</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-300 font-normal">Suporte 24/7</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-300 font-normal">CSM Dedicado</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-300 font-normal">Treinamentos</p>
            </div>
            <Image src={infoIcon} alt="info icon" />
          </div>
        </div>
      </section>

      {/* PRICING CARD #3 */}
      <section className="bg-white rounded-md border border-gray-200 transition-colors delay-100 hover:cursor-pointer hover:border-purple-100 shadow-sm w-96 h-[454px] py-12 px-8">
        <span className="uppercase text-purple-200 text-md font-semibold">
          Para sua empresa
        </span>

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-2xl font-bold text-gray-800">Enterprise</h1>
        </div>

        <button className="w-full my-8 py-4 transition-colors delay-100 hover:cursor-pointer hover:bg-gray-800 hover:text-white border border-gray-800 rounded font-bold text-lg text-gray-800">
          Fale com a gente
        </button>

        <hr className="bg-gray-200" />

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={checkIcon} alt="check icon" />
              <p className="text-gray-600 font-normal">
                Plano customizado especialmente para a necessidade de seu
                negocio
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
