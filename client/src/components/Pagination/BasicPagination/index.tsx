import Link from "next/link";
import React from "react";

type Props = {
  searchParams: SearchParams;
  page: number;
  totalPages: number;
};

const BasicPagination = ({ page, totalPages, searchParams }: Props) => {
  const constructPaginationQueryString = (
    searchParams: SearchParams,
    page: number
  ) => {
    const paramChar = searchParams ? "?" : "&";

    const queryString = new URLSearchParams(searchParams);
    queryString.set("page", page.toString());
    return `${paramChar}${queryString.toString()}`;
  };

  return (
    <div className="join mx-auto my-3">
      {page > 1 && (
        <Link
          href={constructPaginationQueryString(searchParams, page - 1)}
          className="join-item btn bg-brand-primary hover:bg-brand-primary-dark border-brand-primary-dark"
        >
          «
        </Link>
      )}
      <button className="join-item btn bg-brand-primary hover:bg-brand-primary-dark border-brand-primary-dark">
        {page}
      </button>
      {page < totalPages && (
        <Link
          href={constructPaginationQueryString(searchParams, page + 1)}
          className="join-item btn bg-brand-primary hover:bg-brand-primary-dark border-brand-primary-dark"
        >
          »
        </Link>
      )}
    </div>
  );
};

export default BasicPagination;
