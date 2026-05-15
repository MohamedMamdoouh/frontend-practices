export interface Iproduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  categoryId: number;
  description?: string;
  manufactureDate?: Date;
}
