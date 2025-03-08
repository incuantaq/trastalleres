import MercadoPagoConfig, { Preference } from "mercadopago";
import { PreferenceRequest } from "mercadopago/dist/clients/preference/commonTypes";

export const mercadopago = new MercadoPagoConfig({accessToken:'APP_USR-8032147249459451-030313-a1f63fc55f96020361ac61924df52a5f-2303819126'});

export async function POST() {
    // const url = "https://api.mercadopago.com/checkout/preferences/";
    MercadoPagoConfig

    const data:PreferenceRequest = {
      items: [
        {
          title: "Book The Art of War",
          quantity: 1,
          unit_price: 10,
          id: "1234aaa",
        },
      ],
      // back_urls: {
      //   success: "https://trastalleres.com/success",
      //   failure: "https://trastalleres.com/failure",
      //   pending: "https://trastalleres.com/pending",
      // },
      // payment_methods: {
      //   excluded_payment_methods: [
      //     {
      //       id: "amex",
      //     },
      //   ],
      //   excluded_payment_types: [
      //     {
      //       id: "atm",
      //     },
      //   ],
      //   installments: 6,
      // },
      // notification_url: "https://trastalleres.com/notifications",
      // auto_return: "approved",
    };

    try {
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     Authorization: "Bearer APP_USR-8032147249459451-030313-a1f63fc55f96020361ac61924df52a5f-2303819126",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const preference = await new Preference(mercadopago).create({body: { ...data }})

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

