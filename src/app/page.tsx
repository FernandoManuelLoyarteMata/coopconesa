import Image from "next/image";
import aereal from "../../public/aereal.png";
import HeroContent from "./_components/hero/HeroContent";
import { createClient } from "contentful";

const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID as string;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

export default async function Home() {
  const entries = await client.getAssets();
  const noticias = entries.items;

  console.log(entries);

  return (
    <main className="flex h-screen relative text-white">
      {/* <div className="w-full h-full absolute z-0">
        
        <div className="w-full h-full absolute bg-[#11916A] mix-blend-overlay z-20"></div>

        <div className="w-full h-full absolute bg-black mix-blend-hue z-10"></div>
        <Image
          src={aereal}
          width={2054}
          height={1262}
          alt="foto aerea de conesa"
          className=" object-cover z-0 h-screen"
        />
      </div> */}
      <div className="mt-56 text-black text-2xl p-20">
        {}
        {/*  {noticias.map((noticia) => {
          return (
            <div key={noticia.sys.id}>
              <h1>{noticia.fields.title?.toString()}</h1>
              <span>{noticia.fields.slug?.toString()}</span>
              <span>{noticia.sys.createdAt}</span>
              <Image
                src={`https:${noticia.fields.imagenesDeLaNoticia[0].fields.file.url}`}
                alt="imagen"
                width={500}
                height={500}
              />
              <span>{noticia.fields.textoDeLaNoticia?.toString()}</span>
            </div>
          );
        })} */}
      </div>
    </main>
  );
}
