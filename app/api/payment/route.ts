import { metadata } from "@/app/layout";
import { mercadopago } from "@/app/utils";
import {Payment} from "mercadopago";


async function updateSingleItem(query: string, preview = false): Promise<any> {
  return fetch(
    `https://api.contentful.com/content/v1/spaces/zvuvf4y77x2g`, //ENV???
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer uvvGbLFSkRPXOH3-pURBIb2H5e4KJxWTTilhywVcA4w`, //ENV???
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

export async function POST(req: Request, res: Response) {
  const body: {data: {id: string, type: string}} = await req.json();
  try{
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${body.data?.id!}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });
    console.log("response", response)
    if (response.ok) {
      const data : { metadata: {info: string}} = await response.json();
      const bookMetadata = JSON.parse(data.metadata.info);
      console.log("PAYMENT SUCCESSFUL!!!", bookMetadata)
      console.log("take info from metadata, update book")

      const demo = await fetch(`https://api.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries/${bookMetadata.sys.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_BEARER_TOKEN}`,
          "X-Contentful-Version": bookMetadata?.sys.version,
        },
        body: JSON.stringify(bookMetadata), 
      });
      
      console.log("DEMO123", await demo.json())
    }
    
    return new Response(null, {status: 200}); 
    
  } catch (error) {
    console.log("error:", error);
    return new Response(null, {status: 500}); 
  }
}
