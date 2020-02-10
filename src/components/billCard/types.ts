export type frecuency = "Mensual" | "Trimestral";
export type colorCard = "lightcoral" | "LemonChiffon" | "LightGreen" | "lightcyan" | "lightgrey";

export interface BillCardInterface {
  id?: string,
  title: string;
  cost: number;
  frecuency: frecuency;
  color: colorCard;
  payers: string[];
  image?: string;
  paymentDivision?: number | any;
}
