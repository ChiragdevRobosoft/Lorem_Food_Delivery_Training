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
