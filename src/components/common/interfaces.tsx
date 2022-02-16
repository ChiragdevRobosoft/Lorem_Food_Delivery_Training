export interface radioProps {
  value: string;
  name: string;
  options: string[];
  handleChange?: React.MouseEventHandler<HTMLInputElement>;
}
export interface DropdownProps {
  options: { content: string; image: string | null }[];
  name: string;
  arrow?: boolean;
  className?: "semibold";
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

export interface NavbarProps {
  navbarElements: string[];
  navbarType?: "restaurant-details";
  path?: string;
}

export interface DeliveryRatingProps {
  RatingNum: number;
  className?: "reverse-color" | "clickable";
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  id?: string;
}

export interface SearchpathProps {
  path: string[];
  className?: "grey-light" | "grey-dark";
}
export interface MyCartCardProps {
  info: {
    id: string;
    restaurantName: string;
    address: string;
    orderDetails: string;
  };
  index: number;
}

export interface headerProps {
  setShowLogin?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCreateAccount?: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}

export interface locationInputProps {
  className: string;
  locationVal?: string;
  setLocationVal?: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchBoxProps {
  className: string;
  searchVal?: string;
  locationVal?: string;
  setSearchVal?: React.Dispatch<React.SetStateAction<string>>;
}
