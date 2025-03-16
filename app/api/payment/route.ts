import { mercadopago } from "@/app/utils";
import {Payment} from "mercadopago";


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
      const data : { metadata: {}} = await response.json();
      console.log(data.metadata)
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("PAYMENT SUCCESSFUL!!!")
      console.log("take info from metadata, update book")
    }
    
    return new Response(null, {status: 200}); 
    
  } catch (error) {
    console.log("error:", error);
    return new Response(null, {status: 500}); 
  }
}



/* export async function POST(request: Request) {
  // const body: {data: {id: string}} = await request.json();

  console.log("Request:", request);
  const body: {data: {id: string}} = await request.json();

  const payment = await new Payment(mercadopago).get({id: body.data.id});
  console.log("Payment:", payment);
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
 */

