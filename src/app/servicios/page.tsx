import { getServiciosEntries } from "@/utils/db/dbcalls";

export default async function Servicios() {
  const servicios = await getServiciosEntries();
  console.log("servicios entries: ", servicios);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <div>
        <span className="font-bold text-9xl tracking-tighter">Servicios</span>
      </div>
    </main>
  );
}
