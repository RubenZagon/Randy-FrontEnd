type frecuency = "Mensual" | "Trimestral";
type colorCard = "lightcoral" | "LemonChiffon" | "LightGreen" | "lightcyan";


export interface BillCardInterface {
    id: string,
    title: string;
    cost: number;
    frecuency: frecuency;
    color: colorCard;
    payer: string[];
    image: string;
    paymentDivision: number;
  }
  
