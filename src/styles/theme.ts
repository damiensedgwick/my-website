import { createTheme } from '@nextui-org/react';

// 2. Call `createTheme` and pass your custom values
export const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      'blue-200': '#bfdbfe',
      'blue-500': '#3b82f6',
      'blue-800': '#1e40af',
      'purple-200': '#e9d5ff',
      'purple-500': '#a855f7',
      'purple-800': '#6b21a8',
      'teal-200': '#99f6e4',
      'teal-500': '#14b8a6',
      'teal-800': '#115e59',
      'slate-200': '#e2e8f0',
      'slate-500': '#64748b',
      'slate-800': '#1e293b',
    },
  },
});
