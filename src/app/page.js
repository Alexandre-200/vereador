import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[200px]">
      <Video
        videoId="JHFgIStjQsE"
        titulo={""}
        width="440px"
        height={260}
        descricao="Josemar de Almeida Agostinho de 47 anos é casado com Andréia Cristiane e 
        pai de Noemi de 13 anos e Maria Isabel de 10 anos. Cristão católico atuante 
        tem uma longa trajetória de serviço à comunidade. Em 2004, atuou como coordenador do grupo 
        de jovens na Pastoral da Juventude da Paróquia Nossa Senhora de Guadalupe. Atualmente, 
        participa ativamente da comunidade Nossa Senhora Auxiliadora, onde é coordenador de liturgia 
        e do ministério de música, além de contribuir na organização de eventos." />
    </div>
  );
}
