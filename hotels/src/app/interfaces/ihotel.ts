export interface iHotel {
    id: number;
    favorite: boolean;
    name: string;
    description: string;
    stars: string;
    thumb: string;
    amenities: { key: string; label: string }[];
    hasBreakFast: boolean;
    hasRefundableRoom: boolean;
    hasAgreement: boolean;
    nonRefundable: any; 
    address: {
      street: string;
      number: string;
      district: string;
      city: string;
      state: string;
      country: string;
      zipCode: string | null;
      fullAddress: string;
    };
    images: string[];
    deals: any; 
    roomsQuantity: number;
    price: number;
  }