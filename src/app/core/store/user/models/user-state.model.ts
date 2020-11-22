import { UserInfo } from 'core/store/user/models/user-info.model';

export interface UserState {
  appLoaded: boolean;
  token: string;
  userInfo: UserInfo;
}
