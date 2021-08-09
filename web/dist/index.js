export const $ = s => (a => (a.length > 1 ? a : a[0]))(document.querySelectorAll(s));
export * from '@vsnthdev/utilities-base';
