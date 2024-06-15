import { IsEmail } from './class-validator/check.email'

class User {
  @IsEmail()
  email: string

	// @Max(10)
	// password: string

  constructor(email: string) {
    this.email = email
		// this.password = password
  }
}

const u = new User('vy@gmail.com')

console.log('Check: ', u)