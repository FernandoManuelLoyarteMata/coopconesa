import Image from "next/image";
import fachada from "../../../../public/fachada.png";
import "./HeroContent.css";

export default function HeroContent() {
  return (
    <div className="flex h-screen relative mt-16 lg:px-40  overflow-scroll  text-white z-20 scroll-none">
      <div className="flex flex-col gap-8 py-40  bg-red-700 ">
        <span className="font-bold text-9xl  tracking-tighter">CoopConesa</span>
        <Image
          src={fachada}
          alt="fachada del edificio de atencion al publico"
          className="lg:w-[50%] rounded-2xl"
        />
        <p className="text-2xl tracking-tighter font-semibold  xl:w-[50%]">
          Conesa ha sido siempre un pueblo pujante que no ha parado de crecer
          gracias al inmenso capital humano que se ha ido agrupando para formar
          instituciones que lo ponen de manifiesto. Así, hace 50 años nació
          luego de gestiones, reuniones y asambleas la Cooperativa Integral de
          Agua obras y provisión de servicios Públicos.
          <br />
          <br />
          La primer semilla que inicio su creación fue una asamblea ordinaria
          realizada del 03/11/1967 en el Conesa Football Club, cuyos integrantes
          fueron: Presidente: Juan Galmes, Secretario: Julio Rozadilla,
          Tesorero: Osvaldo Petri, Vocales titulares: Delfor Lagama, Miguel
          Luchessi, Humberto Mecozzi, Victorio Ruffini, Juvenal Canevaro,
          Enrique Hirsch y Luis Boarini, Vocales Suplentes: Duilio Pucciarelli,
          Gualberto Lazzari, Horacio Martinez y Juan Ciampichetti, Sindico
          Titular: Ricardo Rosas, Sindico Suplente: Oscar Ferranti.
          <br />
          <br />
          El 27/08/1969 obtiene personería jurídica obteniendo el reconocimiento
          del Instituto Nacional de Acción Cooperativa. Motivo por el cual nos
          encontramos celebrando el aniversario nro. 50 de dicha institución.
        </p>
      </div>
    </div>
  );
}
