import { getNoticiasEntries } from "@/utils/db/dbcalls";

export default async function Noticias() {
  const noticias = await getNoticiasEntries();
  console.log("noticias entries:", noticias);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <div>
        <span className="font-bold text-9xl tracking-tighter">Noticias </span>
      </div>
    </main>
  );
}
