import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {
  const router = useRouter();
  const { term } = router.query;
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${term}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
