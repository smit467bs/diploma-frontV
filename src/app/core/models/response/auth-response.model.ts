import { UserInfo } from 'core/store/user/models';

export interface AuthResponse {
  token: string;
  userInfo: UserInfo;
}
