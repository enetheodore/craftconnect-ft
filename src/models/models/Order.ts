export interface Order {
  id: string;
  customerId: string;
  products: { productId: string; quantity: number }[];
  totalAmount: number;
  status: "ordered" | "accepted" | "shipped" | "delivered";
}
