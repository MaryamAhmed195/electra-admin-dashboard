import { RenderMode, ServerRoute } from '@angular/ssr';
import { inject } from '@angular/core';
import { ProductService } from './shared/services/product.service';
export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'products/:id',
  //   renderMode: RenderMode.Prerender,

  //   async getPrerenderParams() {
  //     const productService = inject(ProductService);

  //     const ids = await productService.getIds();

  //     return ids.map((id) => ({ id }));
  //   },
  // },
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,

    getPrerenderParams: async () => {
      const response = await fetch('/data/products.json');
      const products = await response.json();

      return products.map((product: { id: number }) => ({
        id: String(product.id),
      }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
