import { mercadopago } from "@/app/utils";
import {Payment} from "mercadopago";

export async function POST(request: Request) {
    console.log("Request:", request);
  const body: {data: {id: string}} = await request.json();

  const payment = await new Payment(mercadopago).get({id: body.data.id});

  if (payment.status === "approved") {
    console.log("Approved Payment:", payment);
    // await api.message.add({id: payment.id!, text: payment.metadata.text});

    // Revalidamos la página de inicio para mostrar los datos actualizados
    // revalidatePath("/");
  }
  console.log("Noo Payment:", payment);


  // Respondemos con un estado 200 para indicarle que la notificación fue recibida
  return new Response(null, {status: 200});
}
