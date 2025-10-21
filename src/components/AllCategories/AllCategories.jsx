import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const categories = use(categoryPromise);

  return (
    <div>

      <h2 className="font-semibold text-xl text-primary">
        All Categories ({categories.length})
      </h2>

      <div className="grid grid-cols-1 mt-5 space-y-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={`btn bg-base-100 hover:bg-base-200 font-medium text-xl text-accent`}
            to={`/categories/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
