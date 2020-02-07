import { BillCardInterface } from "../../components/bills/types"

export const billCardList: BillCardInterface[] = [
  {
    id: 'cqz9tj4jk2iu0j1rmg3y',
    title: "Alquiler",
    cost: 700,
    frecuency: "Mensual",
    color: "LightGreen",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/609/609803.png",
    paymentDivision: paymentDivisionCalculate(700)
  },
  {
    id: '5xbn7q8m3qomgkwmwdm1zx',
    title: "Agua",
    cost: 60,
    frecuency: "Trimestral",
    color: "lightcyan",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/414/414974.png",
    paymentDivision: paymentDivisionCalculate(60)
  },
  {
    id: 'c5hiyccqk5gu4i2lw3mgin',
    title: "Pago por ser tu amigo",
    cost: 53,
    frecuency: "Mensual",
    color: "LemonChiffon",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/2246/2246613.png",
    paymentDivision: paymentDivisionCalculate(53)
  }
];

function paymentDivisionCalculate(cost: number, payer?: []) {
  const paymentsGroup = ["ruben", "manz", "Raul"];

  return Math.round(cost / paymentsGroup.length);
}
// eslint-disable-next-line
function selectImage(title: string): string {
  switch (title) {
    case "Alquiler":
      return "https://image.flaticon.com/icons/png/512/609/609803.png";
    case "Agua":
      return "https://image.flaticon.com/icons/png/512/414/414974.png";
    default:
      return "https://image.flaticon.com/icons/png/512/2246/2246613.png";
  }
}
