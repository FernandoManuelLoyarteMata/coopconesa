//nosotros/page.tsx
import { getNosotrosEntries } from "@/utils/db/dbcalls";
import GolderHorizontal from "../_components/ui/GoldenHorizontal";

export default async function Nosotros() {
  const nosotros = await getNosotrosEntries();
  console.log("nosotros entries:", nosotros);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-white">
      <div>
        <span className="font-bold text-9xl tracking-tighter">Nosotros</span>
      </div>
    </main>
  );
}
