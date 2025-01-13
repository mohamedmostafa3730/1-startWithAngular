
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/startWithAngular/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6650, hash: '045bdfacdeffcfcf5828d5982bfcd2f3b5b2cc52c42866e8bc634f18fdb3b6fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: 'a2433358f31518339bed4453f689b222f6a40a3e748f9fc292f6bcb6afca8b88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JLB4CJX4.css': {size: 306010, hash: 'aNUHeuS2F8g', text: () => import('./assets-chunks/styles-JLB4CJX4_css.mjs').then(m => m.default)}
  },
};
