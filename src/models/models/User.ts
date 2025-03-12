export interface ArtisanDetails {
  shopName?: string;
  bio?: string;
  profilePicture?: string;
}

export interface CustomerDetails {
  address?: string;
  phoneNumber?: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: "admin" | "artisan" | "customer";
  createdAt: string;
  artisanDetails?: ArtisanDetails;
  customerDetails?: CustomerDetails;
}
