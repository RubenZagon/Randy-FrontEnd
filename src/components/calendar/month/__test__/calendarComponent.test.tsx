import dayjs from 'dayjs';

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
  test('day().format()', () => {
    expect(dayjs().format()).toBe(dayjs().format());
  });

  test('year() - Debería darme 2020', () => {
    expect(dayjs().year()).toBe(2020);
  });

  test('month() - Debería 0 de Enero', () => {
    expect(dayjs().month()).toBe(0);
  });

  test('Date() - Debería darme el día del mes 30', () => {
    expect(dayjs().date()).toBe(30);
  });

  describe.skip('Manipulación', () => {

    test('Para sacar los días que tiene ese mes', () => {
      expect(dayjs('2019-02-25').daysInMonth()).toBe(28);
      expect(dayjs("12-25-2019", "DD-MMMM-YYYY")).toBe(28);


    });
  });

});
