import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { convertResponse } from './AxiosResponseHandler';
import { IProduct } from './components/Product';
import ProductList, { IProductListProps } from './components/ProductList';

const Home: NextPage<IProductListProps> = ({ products }: IProductListProps) => {
  return (
    <>
      <main className="main">
        <ProductList products={products} />
      </main>
    </>
  );
};

const toProducts = (restProductList: IProductListProps): IProduct[] =>
  restProductList.products;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await axios
    .get('http://localhost:3000/api/hello')
    .then(convertResponse(toProducts));
  return {
    props: {
      products,
    },
  };

  // return {
  //   props: {
  //     products: [
  //       {
  //         id: 'halfmoon',
  //         name: 'Halfmoon Betta',
  //         price: 25.0,
  //         description:
  //           'The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.',
  //         url: '/api/products/halfmoon',
  //       },
  //       {
  //         id: 'dragonscale',
  //         name: 'Dragon Scale Betta',
  //         price: 35,
  //         description:
  //           'The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.',
  //         url: '/api/products/dragonscale',
  //       },
  //       {
  //         id: 'crowntail',
  //         name: 'Crowntail Betta',
  //         price: 7.5,
  //         description:
  //           "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
  //         url: '/api/products/crowntail',
  //       },
  //       {
  //         id: 'veiltail',
  //         name: 'Veiltail Betta',
  //         price: 5.0,
  //         description:
  //           'By far the most common betta fish. You can recognize it by its long tail aiming downwards.',
  //         url: '/api/products/veiltail',
  //       },
  //     ],
  //   },
  // };
};

export default Home;
