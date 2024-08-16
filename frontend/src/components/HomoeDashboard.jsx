import React, { useMemo, useState } from "react";
const products = [
  {
    id: 1,
    Category: "Electronics",
    Company: "Apple",
    Product: "iPhone 13",
    Description: "The latest iPhone with advanced features",
    Price: 999,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "John Doe",
        Quantity: 2,
        TotalAmount: 1998,
      },
      {
        Date: "2023-09-04",
        Customer: "Jane Smith",
        Quantity: 1,
        TotalAmount: 999,
      },
    ],
  },
  {
    id: 2,
    Category: "Clothing",
    Company: "Nike",
    Product: "Running Shoes",
    Description: "High-quality running shoes for athletes",
    Price: 89,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "Alice Johnson",
        Quantity: 3,
        TotalAmount: 267,
      },
      {
        Date: "2023-09-03",
        Customer: "Bob Brown",
        Quantity: 2,
        TotalAmount: 178,
      },
    ],
  },
  {
    id: 3,
    Category: "Books",
    Company: "Penguin Books",
    Product: "The Great Gatsby",
    Description: "Classic novel by F. Scott Fitzgerald",
    Price: 12,
    CustomDetails: [
      {
        Date: "2023-09-02",
        Customer: "Ella Williams",
        Quantity: 5,
        TotalAmount: 60,
      },
    ],
  },
  {
    id: 4,
    Category: "Home Appliances",
    Company: "Samsung",
    Product: "Smart Refrigerator",
    Description: "Refrigerator with smart features and spacious design",
    Price: 14,
    CustomDetails: [
      {
        Date: "2023-09-05",
        Customer: "David Wilson",
        Quantity: 1,
        TotalAmount: 14,
      },
    ],
  },
];

const HomoeDashboard = () => {


  const [selectedRows, setSelectedRows] = useState([]);
  const [activeColumn, setActiveColumn] = useState(["Price"]);
  const [sortingColumn, setSortingColumn] = useState(["Price"]);

  const sortByColumn = (column) => {
    if (sortingColumn?.includes(column)) {
      const sortData = products
        .slice()
        .sort((a, b) =>
          b[column].toString().localeCompare(a[column].toString())
        );

      setSortingData(sortData);
      setSortingColumn([]);

    } else {

      const sortData = products
        .slice()
        .sort((a, b) =>
          a[column].toString().localeCompare(b[column].toString())
        );

      setSortingData(sortData);
      setSortingColumn([`${column}`]);
    }
    setActiveColumn([`${column}`]);
  };


  const [sortingData, setSortingData] = useState(products);
  const [selectAll, setSelectAll] = useState(false);


  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : sortingData.map((item) => item.id));
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };


  useMemo(() => {
    const sortedProducts = products.slice().sort((a, b) => a.Price - b.Price);
    setSortingData(sortedProducts);
  }, []);


  return (
    <>
      <div className="min-h-screen h-full bg-white flex flex-col items-center justify-center py-4 sm:py-10 gap-12">
        <div className="w-full max-w-4xl px-2">
          <h1 className="text-2xl font-medium">
            Tailwind Table Sorting and Selecting
          </h1>
          <div className="w-full overflow-x-scroll md:overflow-auto max-w-7xl 2xl:max-w-none mt-2">
            <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer ">
              <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
                <tr className="">
                  
                  <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap group">
                    <div className="flex items-center">
                      <svg
                        className={`w-4 h-4 cursor-pointer ${
                          activeColumn?.includes("Category")
                            ? "text-black"
                            : "text-[#BCBDBE] group-hover:text-black rotate-180"
                        } ${
                          sortingColumn?.includes("Category")
                            ? "rotate-180"
                            : "rotate-0"
                        }
           `}
                        onClick={() => sortByColumn("Category")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      <span
                        className="cursor-pointer pl-1"
                        onClick={() => sortByColumn("Category")}
                      >
                        Category
                      </span>
                    </div>
                  </th>
                  <th className="py-3 px-3 flex items-center text-[#212B36] sm:text-base font-bold whitespace-nowrap group">
                    <svg
                      className={`w-4 h-4 cursor-pointer ${
                        activeColumn?.includes("Company")
                          ? "text-black"
                          : "text-[#BCBDBE] group-hover:text-black rotate-180"
                      } ${
                        sortingColumn?.includes("Company")
                          ? "rotate-180"
                          : "rotate-0"
                      } `}
                      onClick={() => sortByColumn("Company")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    <span
                      className="cursor-pointer pl-1"
                      onClick={() => sortByColumn("Company")}
                    >
                      Company
                    </span>
                  </th>
                  <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap group">
                    <div className="flex items-center">
                      <svg
                        className={`w-4 h-4 cursor-pointer ${
                          activeColumn?.includes("Product")
                            ? "text-black"
                            : "text-[#BCBDBE] group-hover:text-black rotate-180"
                        } ${
                          sortingColumn?.includes("Product")
                            ? "rotate-180"
                            : "rotate-0"
                        } `}
                        onClick={() => sortByColumn("Product")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      <span
                        className="cursor-pointer pl-1"
                        onClick={() => sortByColumn("Product")}
                      >
                        Product
                      </span>
                    </div>
                  </th>
                  <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                    Description
                  </th>
                  <th className="flex items-center py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap group">
                    <svg
                      className={`w-4 h-4 cursor-pointer  ${
                        sortingColumn?.includes("Price")
                          ? "rotate-180"
                          : "rotate-0"
                      } ${
                        activeColumn?.includes("Price")
                          ? "text-black"
                          : "text-[#BCBDBE] group-hover:text-black rotate-180"
                      }`}
                      onClick={() => sortByColumn("Price")}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    <span
                      className="cursor-pointer pl-1"
                      onClick={() => sortByColumn("Price")}
                    >
                      Price
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortingData?.map((data, index) => (
                  <tr key={index}>
                   
                    <td className="py-2 px-3 font-normal text-base border-t whitespace-nowrap">
                      {data?.Category}
                    </td>
                    <td className="py-2 px-3 font-normal text-base border-t whitespace-nowrap">
                      {data?.Company}
                    </td>
                    <td className="py-2 px-3 text-base font-normal border-t whitespace-nowrap">
                      {data?.Product}
                    </td>
                    <td className="py-2 px-3 text-base font-normal border-t min-w-[250px]">
                      {data?.Description}
                    </td>
                    <td className="py-5 px-4 text-base font-normal border-t">
                      {"$" + data?.Price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={6} className="border-t"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomoeDashboard;
