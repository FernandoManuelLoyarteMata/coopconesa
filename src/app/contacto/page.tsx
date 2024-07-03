import { getContactoEntries } from "@/utils/db/dbcalls";

export default async function Contacto() {
  const contacto = await getContactoEntries();
  console.log("contacto entries: ", contacto);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <div>
        <span className="font-bold text-9xl tracking-tighter">Contacto</span>
      </div>
    </main>
  );
}
