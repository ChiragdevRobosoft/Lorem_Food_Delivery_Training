export interface radioProps {
  value: string;
  name: string;
  options: string[];
  handleChange: React.MouseEventHandler<HTMLInputElement>;
}
export interface DropdownProps {
  options: { content: string; image: string | null }[];
  name: string;
}

export interface RestauarantCardprops {
  card: {
    name: string;
    rating: number;
    address: string;
    variety: string;
    availabilityInfo: string;
    detailsList: string[];
  };
}

export interface restaurantListProps {
  name: string;
  outlets: string;
}

export interface radioProps {
  value: string;
  name: string;
  options: string[];
  handleChange: React.MouseEventHandler<HTMLInputElement>;
}

export interface DropdownProps {
  options: { content: string; image: string | null }[];
  name: string;
}

export interface foodItemProps {
  id: string;
  foodName: string;
  image: boolean;
  bestseller: boolean;
  veg: boolean;
  cost: number;
  customizable: boolean;
  description: string;
  quantity: number;
  addOn?: string;
}

export interface foodcardDetailsProps {
  [key: string]: foodItemProps[];
}
export interface PaymentCardDetailsProps {
  cardNumber: string;
  cardType: string;
  primaryStatus: boolean;
}
export interface reviewCardProps {
  name: string;
  reviewsCount: number;
  ratingsCount: number;
  ratingNum: number;
  reviews?: string;
  date: string;
  likesCount: number;
  images: number;
}
export interface AddressCardDetailsProps {
  place: string;
  address: string;
  primaryStatus?: boolean;
}
export interface orderCardProps {
  orderId: string;
  hotelName: string;
  address: string;
  Items: string;
  Costs: string;
  DeliveryStatus: string;
}
