import React, { useState } from "react";
import { User } from "./models/User"; 

const UserProfileForm = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    role: "customer",
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <select name="role" value={user.role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="artisan">Artisan</option>
        <option value="customer">Customer</option>
      </select>
    </form>
  );
};

export default UserProfileForm;
