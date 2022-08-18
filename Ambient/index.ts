type User = {
  user: string
  password: string | number
}
type VerifyUser = (user: User, sentUser: User) => boolean

const verifyUser: VerifyUser = (user, sentUser) => {
  return user.password === sentUser.password && user.user === sentUser.user
}
console.log(
  verifyUser(
    { password: 123, user: 'jefferson' },
    { password: 123, user: 'jefferson' }
  )
)
