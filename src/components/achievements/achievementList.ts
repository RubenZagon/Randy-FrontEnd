
//TODO Intefaces de logros a nuevo archivo Types
export type stateLock = "unlock" | "lock"

export interface AchievementInterface {
  id: number,
  name: string,
  description: string,
  image: string,
  unlock: stateLock,
}

/* TODO Lista de logros
 * [] Pasar lista de logros a Base de datos JSON
 * [] Pasarlo a Redux Redux
 */




export const achievementList: AchievementInterface[] = [

  {
    id: 1,
    name: "Basura",
    description: "Tirar la basura más de 30 veces 💩",
    image: "https://image.flaticon.com/icons/png/512/2371/2371800.png",
    unlock: "unlock"
  },
  {
    id: 2,
    name: "Atareada",
    description: "Has cumplido más de 400 tareas ✅ ",
    image: "https://image.flaticon.com/icons/png/512/2246/2246574.png",
    unlock: "lock",
  },
  {
    id: 3,
    name: "Mejor compañer@",
    description: "Has sido elegid@ mejor compañer@ del mes 3 veces consecutivas 🏆 ",
    image: "https://image.flaticon.com/icons/png/512/1208/1208203.png",
    unlock: "lock",
  }
]
