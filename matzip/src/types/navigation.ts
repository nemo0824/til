import { NavigatorScreenParams } from '@react-navigation/native';

export type MapStackPramsList = {
  MapHome: undefined;
  AddLocation: undefined;
  SearchLocation: undefined;
};

export type AuthStackPramsList = {
  AuthHome: undefined;
  Login: undefined;
  Signup: undefined;
};

export type FeedStackPramsList = {
  FeedHome: undefined;
  FeedDetail: { id: number };
  FeedFavorite: undefined;
  EditLocation: { id: number };
};

export type MainDrawerPramList = {
  Map: NavigatorScreenParams<MapStackPramsList>;
  Feed: NavigatorScreenParams<FeedStackPramsList>;
  Calendar: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainDrawerPramList {}
  }
}
