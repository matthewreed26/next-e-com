// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProductListProps } from '../components/ProductList';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductListProps>
) {
  res.status(200).json({
    products: [
      {
        id: 'halfmoon',
        name: 'Halfmoon Betta',
        price: 25.0,
        description:
          'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
        url: '/api/products/halfmoon',
      },
      {
        id: 'dragonscale',
        name: 'Dragon Scale Betta',
        price: 35,
        description:
          'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
        url: '/api/products/dragonscale',
      },
      {
        id: 'crowntail',
        name: 'Crowntail Betta',
        price: 7.5,
        description:
          "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
        url: '/api/products/crowntail',
      },
      {
        id: 'veiltail',
        name: 'Veiltail Betta',
        price: 5.0,
        description:
          'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
        url: '/api/products/veiltail',
      },
    ],
  });
}
