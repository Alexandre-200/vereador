import Card from "../../components/Card";
import Carrosel from "../../components/Carrosel";
import Video from "../../components/Video";
import Imagem from "../../components/Imagem";

const OPTIONS = { loop: true }
const SLIDES_CHICO = Array.from(Array(4).keys())
const SLIDES_FLAUTA = Array.from(Array(3).keys())
const SLIDES_PISTA = Array.from(Array(3).keys())

export default function Comunidade() {
  return (
    <div className="mt-[120px]">

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className="font-semibold text-justify uppercase text-1xl ">
            Em 2011, Almeida Agostinho mudou-se para a zona Oeste de Marília, onde os moradores se
            uniram em busca de melhorias para a região, que estava começando a se desenvolver. Na
            época, não havia infraestrutura de serviços públicos básicos, como a entrega de
            correspondências, entre muitas outras necessidades. Reconhecendo a necessidade de uma
            representatividade para a população, Almeida Agostinho foi indicado para constituir e
            liderar a recém-formada Associação de Moradores.
          </p>
          <p className="font-semibold text-justify uppercase text-1xl mt-4">
            Uma vez formalizada a Associação, Almeida Agostinho e sua diretoria iniciaram os trabalhos
            para atender às demandas da região. Confira a seguir as ações e conquistas realizadas:
          </p>
          <p className=" font-semibold text-justify uppercase text-2xl mt-4">SERVIÇOS DE CORREIO</p>
          <p className="font-semibold text-justify uppercase text-1xl mt-4">
            Logo após a entrega de algumas casas do Bairro precisamos fazer abaixo assinado para
            que os serviços de correios funcionassem. Após coleta de assinaturas protocolamos o
            documento na Empresa que após algumas semanas depois efetivou os serviços no Bairro.
          </p>
        </div>
      </div>


      <Imagem
        w={700}
        h={600}
        foto="correios"
      />
      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className=" font-semibold text-justify uppercase text-2xl mt-4">ILUMINAÇÃO</p>
        </div>
      </div>

      <Video
        descricao={""}
        videoId={`JHFgIStjQsE`}
      />





      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className=" font-semibold text-justify uppercase text-2xl mt-4">AMPLIAÇÃO DA EMEFEI CHICO XAVIER</p>
        </div>
      </div>

      <Video
        descricao={"Com o aumento de moradores no bairro e em seu entorno e como consequência o " +
          "aumento na demanda de vagas solicitamos junto ao governo municipal a ampliação da EMEFEI " +
          "Chico Xavier ao qual fomos atendidos."}
        videoId={`JHFgIStjQsE`}
      />
      <Carrosel slides={SLIDES_CHICO} options={OPTIONS} foto={"cx"} />

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className=" font-semibold text-justify uppercase text-2xl mt-4">CONSTRUÇÃO DE EMEI FLAUTA MÁGICA</p>
        </div>
      </div>

      <Video
        descricao={""}
        videoId={`JHFgIStjQsE`}
      />


      <Carrosel slides={SLIDES_FLAUTA} options={OPTIONS} foto={"fm"} />

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className=" font-semibold text-justify uppercase text-2xl mt-4">PISTA DE COOPER - ACADEMIA AO AR LIVRE PLAY GROUND</p>
        </div>
      </div>

      <Video
        descricao={"Em 2016 após solicitação ao poder público municipal, fomos contemplados com "+
          "uma pista do Cooper - Academia ao ar livre e play-ground para as crianças do bairro e "+
          "adjacências, onde a região ficou mais revitalizada e valorizada."}
        videoId={`JHFgIStjQsE`}
      />


      <Carrosel slides={SLIDES_PISTA} options={OPTIONS} foto={"pc"} />

      <div className="flex justify-center">
        <div className=" text-center w-[320px] md:w-[640px] ">
          <p className="font-semibold text-center uppercase text-1xl mt-20">
            "Dizem que o trabalho dignifica o homem, mas eu acredito que é o trabalho voluntário
            que verdadeiramente eleva a nossa dignidade."
          </p>
        </div>
      </div>
    </div>
  )
}