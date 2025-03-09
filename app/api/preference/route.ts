import MercadoPagoConfig, { Preference } from "mercadopago";

const mercadopago = new MercadoPagoConfig({accessToken:'APP_USR-8032147249459451-030313-a1f63fc55f96020361ac61924df52a5f-2303819126'});

export async function POST() {
    const data: any = {
      statement_descriptor: 'TestStore',
      binary_mode: false,
      external_reference: 'IWD1238971',
      items: [
        {
            id: '123456',
            title: 'Mi Librito xD',
            quantity: 1,
            unit_price: 15000,
            description: 'Un librito bien bonito',
            category_id: 'retail'
        }
      ],
      payment_methods: {
        excluded_payment_types: [],
        excluded_payment_methods: [],
        installments: 12,
        default_payment_method_id: 'account_money'
      },
      redirect_urls: {
        failure: '',
        pending: '',
        success: ''
      },
      notification_url: '',
      expires: true,
      // sandbox: true,
    };

    try {
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

