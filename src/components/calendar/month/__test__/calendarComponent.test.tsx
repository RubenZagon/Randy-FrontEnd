import moment from 'moment';
/**
date		Date of Month
day	d	Day of Week (Sunday as 0, Saturday as 6)
month	M	Month (January as 0, December as 11)
year	y	Year
hour	h	Hour
minute	m	Minute
second	s	Second
millisecond	ms	Millisecond
 */

describe('Calendar', () => {
  test('Formato local', () => {
    expect(moment().locale('es').format('DD-MMMM-YYYY')).toBe("30-enero-2020");
  });

  test('Dias del mes', () => {
    expect(moment().locale('es').daysInMonth()).toBe(31);
  });

  test.skip('Fecha por la que comienza debe ser Lunes', () => {
    expect(moment().locale('es').day()).toBe(3);
  });

  test('Día de la semana en la que comienza el mes', () => {
    expect(moment('2020-01-01').locale('es').day()).toBe(3);
  });
});
