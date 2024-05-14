export interface IUsers {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    coordinates: any;
    city: string;
    state: string;
    country: string;
  };
  email: string;
}
