import { BillCardInterface } from "../../components/bills/types"
import billsList from '../../database/billsList.json'
import { uniqueId } from "../../utils/uniqueId";

export const billCardList: BillCardInterface[] = billsList.map((bill: any) => {
  return {
    id: uniqueId(),
    ...bill,
    image: selectImage(bill.title),
    paymentDivision: toNumber((bill.cost / bill.payer.length).toFixed(2))
  }
})

function toNumber(string: string) {
  return +string
}

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

