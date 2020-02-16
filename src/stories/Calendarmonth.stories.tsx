import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { action } from '@storybook/addon-actions';
import { SECCTION } from './constanst';
import { CalendarMonth } from '../components/calendar/month/calendarMonth';


// TODO Agregar decoradores para que no quede tan pegado en el Desktop view

export default {
  title: SECCTION.CALENDAR + "Month calendar",
  components: CalendarMonth,
  decorators: [
  ]
};



export const Desktop = () => <CalendarMonth />;

Desktop.story = { parameters: { viewport: { defaultViewport: 'responsive' } }, };






export const Phone = () => <CalendarMonth />;

Phone.story = { parameters: { viewport: { defaultViewport: 'iphone6' }, }, };






export const Tablet = () => <CalendarMonth />;

Tablet.story = { parameters: { viewport: { defaultViewport: 'ipad' }, }, };


