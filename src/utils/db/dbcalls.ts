//dbcalls.ts
import { createClient } from "contentful";

const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID as string;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string;

const client = createClient({
  space: contentfulSpaceId,
  accessToken: contentfulAccessToken,
});

let nosotrosEntries: any = null;
let serviciosEntries: any = null;
let noticiasEntries: any = null;
let contactoEntries: any = null;

export async function getNosotrosEntries() {
  if (!nosotrosEntries) {
    const entries = await client.getEntries({ content_type: "nosotros" });
    nosotrosEntries = entries;
  }
  return nosotrosEntries;
}

export async function getServiciosEntries() {
  if (!serviciosEntries) {
    const entries = await client.getEntries({ content_type: "servicios" });
    serviciosEntries = entries;
  }
  return serviciosEntries;
}

export async function getNoticiasEntries() {
  if (!noticiasEntries) {
    const entries = await client.getEntries({ content_type: "noticias" });
    noticiasEntries = entries;
  }
  return noticiasEntries;
}

export async function getContactoEntries() {
  if (!contactoEntries) {
    const entries = await client.getEntries({ content_type: "contacto" });
    contactoEntries = entries;
  }
  return contactoEntries;
}
