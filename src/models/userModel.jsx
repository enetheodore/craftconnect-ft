// import React, { useState } from "react";

// const UserProfileForm = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "customer",
//     createdAt: new Date().toISOString(),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <form>
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-gray-700">
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="w-full p-3 border rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-3 border rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="password" className="block text-gray-700">
//           Password
//         </label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="w-full p-3 border rounded-md"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="role" className="block text-gray-700">
//           Role
//         </label>
//         <select
//           name="role"
//           value={user.role}
//           onChange={handleChange}
//           className="w-full p-3 border rounded-md"
//         >
//           <option value="admin">Admin</option>
//           <option value="artisan">Artisan</option>
//           <option value="customer">Customer</option>
//         </select>
//       </div>
//     </form>
//   );
// };

// export default UserProfileForm;
