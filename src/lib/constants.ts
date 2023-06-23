import { getDefaultFontSize } from './utils';

const DEFAULT_FONT_SIZE = getDefaultFontSize() || 16;
export const TITANIC = 3800;
export const SCREENS = (30 * DEFAULT_FONT_SIZE) / 16;
export const COLUMNS = 10;
export const ROWS = 10;
export const ROWS_PER_METRE = (SCREENS * ROWS) / TITANIC;
export const METRES_PER_ROW = TITANIC / (SCREENS * ROWS);

console.log('SCREENS :>> ', SCREENS);
