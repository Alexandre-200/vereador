"use client"

import Video from "../../components/Video";
import Card from "../../components/Card";
import Carrosel from "../../components/Carrosel";


const OPTIONS = { loop: true }
const SLIDES_VOLUNTARIO = Array.from(Array(7).keys())
const SLIDES_PREMIO = Array.from(Array(3).keys())

export default function Voluntariado() {

  return (
    <div className="mt-[120px]">

      
      <Video
        descricao={"ALMEIDA AGOSTINHO REALIZOU TRABALHOS VOLUNTÁRIO NA ACC DE MARÍLIA POR QUASE DOZE ANOS"}
        videoId={``}
      />
      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className="font-semibold text-justify uppercase text-1xl ">
            Almeida Agostinho iniciou seu voluntariado na ACC Associação de Combate ao Câncer de Marília
            e Região em outubro de 2008.
            Ele ajudava a organizar e realizar eventos como bingos, almoços, produção de pizzas para
            venda, bazar, recepção na radioterapia e coleta de doações, com o objetivo de arrecadar
            fundos para a compra de medicamentos e suplementos alimentares para pacientes com câncer.
          </p>
        </div>
      </div>


      <Card
        foto="premio"
        descricao="Em 2014/2015, Almeida integrou a diretoria da ACC como Tesoureiro, período em 
          que a associação recebeu uma menção honrosa pela indicação ao prêmio Dr. Pinotti, feita 
          pelo deputado federal Walter Ihoshi."
      />

      <Carrosel slides={SLIDES_VOLUNTARIO} options={OPTIONS} foto={"acc"} />

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className="font-semibold text-justify uppercase text-1xl mt-20">
            Em 2017 almeida recebeu homenagem da câmara municipal por ocasião da comemoração dos 25
            anos  da ACC
          </p>
        </div>
      </div>

      <Carrosel slides={SLIDES_PREMIO} options={OPTIONS} foto={"cmm"} />

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className="font-semibold text-center uppercase text-1xl mt-20">
            Dizem que o trabalho dignifica o homem, mas eu acredito que é o trabalho voluntário
            que verdadeiramente eleva a nossa dignidade.
          </p>
        </div>
      </div>

    </div>
  )
}