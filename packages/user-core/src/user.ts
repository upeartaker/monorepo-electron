import { EventEmitter } from 'events'

export type UserType = 'mobile' | 'pc' | 'app'

class UserCore extends EventEmitter {
  static createUser(): UserCore {
    return new UserCore()
  }

  private _uid?: string
  private _token?: string
  private _type?: UserType

  constructor() {
    super()
  }

  login() {
    console.log('login')
  }

  logout() {
    console.log('logout')
  }

  getToken() {
    console.log('getToken')
  }
}

export { UserCore }
