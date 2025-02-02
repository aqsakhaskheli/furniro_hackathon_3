// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-[#0c0c0c] py-16 px-6 sm:px-12 md:px-16 lg:px-32 mt-44">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h1 className="text-[20px] text-white sm:text-[24px] font-bold">Funiro.</h1>
//             <p className="mt-4 text-white max-w-sm text-sm sm:text-base">
//               400 University Drive Suite 200 Coral Gables, FL 33134 USA
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <h1 className="text-[#9F9F9F] text-[14px] sm:text-[16px]">Links</h1>
//             <Link href="/" className="text-white text-sm sm:text-base">
//               Home
//             </Link>
//             <Link href="/shop" className="text-white text-sm sm:text-base">
//               Shop
//             </Link>
//             <Link href="/blog" className="text-white text-sm sm:text-base">
//               Blog
//             </Link>
//             <Link href="/contact" className="text-white text-sm sm:text-base">
//               Contact
//             </Link>
//           </div>

//           <div className="flex flex-col gap-3">
//             <h1 className="text-white text-[14px] sm:text-[16px]">Help</h1>
//             <Link href="/payment-options" className="text-white text-sm sm:text-base">
//               Payment Options
//             </Link>
//             <Link href="/returns" className="text-white text-sm sm:text-base">
//               Returns
//             </Link>
//             <Link href="/privacy-policy" className="text-white text-sm sm:text-base">
//               Privacy Policies
//             </Link>
//           </div>

//           <div className="flex flex-col items-center gap-4">
//             <h1 className="text-white text-[14px] sm:text-[16px]">Newsletter</h1>
//             <input
//               type="email"
//               className="border rounded-md border-[#D9D9D9] text-sm text-center p-2 mt-2 w-full max-w-xs sm:max-w-sm"
//               placeholder="Enter Your Email Address"
//             />
//             <input
//               type="email"
//               className="border rounded-md border-[#D9D9D9] text-sm text-center p-2 mt-2 w-full max-w-xs sm:max-w-sm"
//               placeholder="Your Email"
//             />
//             <button className="bg-[#B88E2F] text-white p-2 px-6 mt-4 text-sm sm:text-base">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-[#D9D9D9] pb-10 sm:pb-14 w-full text-center">
//         <br />
//         <span className="text-xs sm:text-sm">2023 Funiro. All rights reserved</span>
//       </div>
//     </>
//   );
// };

// export default Footer;

// // import React from 'react'

// // const Footer = () => {
// //   return (
// //     <div>
// //       <footer className="text-white body-font">
// //   <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
// //     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
// //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
// //         <span className="ml-3 text-xl">Furniro</span>
// //       </a>
// //       <p className="mt-16 ml-3 w-[285px] h-[72px] text-base text-white">
// //       400 University Drive Suite 200 Coral Gables, FL 33134 USA
// //       </p>
// //     </div>
// //     <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
// //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
// //         <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
// //           Links
// //         </h2>
// //         <nav className="list-none font-medium text-white text-base mb-10">
// //           <li className='mb-6'>
// //             <a >Home</a>
// //           </li>
// //           <li className='mb-6'>
// //             <a>Shop</a>
// //           </li>
// //           <li className='mb-6'>
// //             <a>About</a>
// //           </li>
// //           <li>
// //             <a >Contact</a>
// //           </li>
// //         </nav>
// //       </div>
// //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
// //         <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
// //           Help
// //         </h2>
// //         <nav className="list-none font-medium  text-white text-base mb-10">
// //           <li className='mb-6'>
// //             <a >Payment Options</a>
// //           </li>
// //           <li className='mb-6'>
// //             <a >Returns</a>
// //           </li>
// //           <li>
// //             <a >Privacy Policies</a>
// //           </li>
// //         </nav>
// //       </div>
// //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
// //         <h2 className="title-font font-medium text-graay2 tracking-widest text-base mb-3">
// //           Newsletter
// //         </h2>
// //         <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
// //   <div className="flex md:flex-nowrap flex-wrap justify-center ml-[-20px] items-end md:justify-start">
// //     <div className="relative sm:w-64 w-40 mt-[-22px] sm:mr-4 mr-2">
// //       <h1 className='underline opacity-40'>Enter Your Email Address</h1>
// //     </div>
// //     <button className="inline-flex mt-[-20px] text-white py-2 px-6 hover:underline ">
// //       SUBSCRIBE
// //     </button>
// //   </div>
// // </div>

// //       </div>
      
// //     </div>
// //   </div>
// //   <div>
// //   <div className='scroll-m-20 border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px]'/>
// //     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
// //       <p className="text-white text-base text-center sm:text-left">
// //       2023 furino. All rights reverved
// //       </p>
     
// //     </div>
// //   </div>
// // </footer>

// //     </div>
// //   )
// // }

// // export default Footer

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-100 py-10 border-t border-gray-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding and Address Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-500">Funiro</h2>
          <p className="text-sm text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://web.facebook.com/profile.php?id=100028458333413/" aria-label="Facebook">
              <FaFacebookF className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
            <Link href="https://github.com/aqsakhaskheli/" aria-label="Twitter">
              <FaGithub className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/aqsa-khaskheli-768098172/" aria-label="LinkedIn">
              <FaLinkedinIn className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-500 text-gray-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Customer Support</h3>
          <ul className="space-y-2">
            {["Payment Options", "Shipping & Returns", "Privacy Policies", "FAQs"].map((support) => (
              <li key={support}>
                <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                  {support}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates, exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 mb-2 sm:mb-0 text-gray-900 border border-gray-600 rounded-lg sm:rounded-r-none focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-500 px-4 py-2 text-white rounded-lg sm:rounded-l-none hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
