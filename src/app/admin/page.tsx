"use client";

import { useEffect, useState } from "react";
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalStock, setTotalStock] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [completedOrders, setCompletedOrders] = useState<number>(0);
  const [pendingOrders, setPendingOrders] = useState<number>(0);
  const [deliveredOrders, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           price,
//           stock,
//         }`;

//         // const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 0)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:ml-64">
 <div className="mb-8 bg-white p-4 rounded-lg shadow-lg text-center mt-20 md:mt-0">
  <p className="text-3xl font-bold font-[Amiri] text-red-600">
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
  </p>
  <p className="text-2xl font-bold text-gray-600 font-[Amiri] mt-2">
    وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ
  </p>
  <p className="text-2xl font-bold text-gray-600 font-[Amiri] mt-2">
    اللَّهُمَّ بَارِكْ لِي فِي رِزْقِي وَفِي كَسْبِي
  </p>
</div>

      <h1 className="text-3xl font-bold text-blue-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Products Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaBox className="text-4xl text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">{totalProducts}</p>
          </div>
        </div>

        {/* Total Stock Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaShoppingCart className="text-4xl text-green-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Stock</h2>
            <p className="text-2xl font-bold">{totalStock}</p>
          </div>
        </div>

        {/* Total Amount Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaMoneyBillWave className="text-4xl text-yellow-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Sales Amount</h2>
            <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaUsers className="text-4xl text-red-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">{totalOrders}</p>
          </div>
        </div>

        {/* Delivered Orders Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaShoppingCart className="text-4xl text-teal-500" />
          <div>
            <h2 className="text-lg font-semibold">Delivered Orders</h2>
            <p className="text-2xl font-bold">{deliveredOrders}</p>
          </div>
        </div>

        {/* Pending Orders Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-2xl transition">
          <FaShoppingCart className="text-4xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">Pending Orders</h2>
            <p className="text-2xl font-bold">{pendingOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
