import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from './../components/SearchResults';

const Search = ({ results }) => {
  const router = useRouter();

  console.log(results);
  return (
    <>
      <Head>
        <title>
          {router.query.term ? `${router.query.term} | ` : ''}Google Search
        </title>
      </Head>

      <Header />

      <SearchResults results={results} />
    </>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const { term } = context.query;
  const startIndex = context.query.start || '0';

  const useDummyData = false;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
};
