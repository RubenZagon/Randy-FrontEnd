interface dateTS {
  dayWeek: {},
  month: string[]
}

const DATE: dateTS = {
  dayWeek: {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    0: 'Domingo',
  },
  month: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_')

}

export default DATE
