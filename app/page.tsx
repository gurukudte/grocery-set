"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Grocery Delivery Made Easy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Fresh groceries from nearby supermarkets delivered right to your society or apartment
        </p>

        <div className="flex flex-col gap-6 items-center mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <div className="flex justify-center items-center flex-col p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <Image
                src="/icons/local-stores.png"
                alt="Local Stores"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="font-semibold mb-2">Local Stores</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Connect with nearby supermarkets and grocery stores</p>
            </div>
            <div className="flex justify-center items-center flex-col  p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <Image
                src="/icons/fast-delivery.png"
                alt="Fast Delivery"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="font-semibold mb-2">Quick Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Swift delivery to your society or apartment</p>
            </div>
            <div className="flex justify-center items-center flex-col  p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <Image
                src="/icons/fresh-products.png"
                alt="Fresh Products"
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="font-semibold mb-2">Fresh Products</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Quality groceries and fresh produce</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 flex-grow"
              />
              <button className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 GrocerySet. All rights reserved.</p>
        <a href="#" className="hover:text-green-600">Privacy Policy</a>
        <a href="#" className="hover:text-green-600">Terms of Service</a>
        <a href="#" className="hover:text-green-600">Contact Us</a>
      </footer>
    </div>
  );
}
