import { mercadopago } from "@/app/utils";
import { Preference } from "mercadopago";

export async function POST(req: Request): Promise<Response> {
  const requestBody = await req.json(); 
  const { metadata, ...items} = requestBody;
  console.log("asd123", metadata);
  console.log("asd123", metadata);
  console.log("asd123", metadata);
  console.log("asd123", metadata);
  console.log("asd123", metadata);
  console.log("asd123", metadata);
  console.log("ITEMS", items);
    const body: any = {
      "items": [items],
      "metadata": {
        "info": JSON.stringify(metadata)
      },
      "payment_methods": {
          "excluded_payment_types": [],
          "excluded_payment_methods": [],
          "installments": 2,
          "default_payment_method_id": "pse"
      },
      /* "back_urls": {
        "failure": 'http://localhost:3000/back-failure',
        "pending": 'http://localhost:3000/back-pending',
        "success": 'http://localhost:3000/back-success'
      },
      "auto_return": "approved",
      */
      "notification_url": "https://d0pr3j9j-3000.use2.devtunnels.ms/api/payment",
      "expires": true,
    };

    try {
      const preference = await new Preference(mercadopago).create({ body })

      console.log("Response:", preference);

      if (!preference) {
        throw new Error("Failed to create preference");
      }

      const result = await preference;
      return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        JSON.stringify({ error: "Something went wrong" }),
        { status: 500 }
      );
    }
  }

