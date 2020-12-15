import { Injectable } from '@angular/core';
import { UsersRepository } from 'core/repositories';
import { Observable } from 'rxjs';
import { UserInfo } from 'core/store/user/models';

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private usersRepository: UsersRepository) {
  }

  findUserByEmail(email: string): Observable<UserInfo> {
    return this.usersRepository.findUserByEmail(email);
  }
}
