// Literal Type
type Status = "pending"

const status: Status = "pending"

console.log(status)

// Basic Union
type Identity = string | number

const id : Identity = 23456

console.log(id)

// Literal Union
type Role = "user" | "admin" | "super-admin"

const userRole: Role = "admin"

console.log(userRole)

// Object Union
type Admin = { id: number, role: "admin", privileges: string[] }
type Member = { id: number, role: "member", plans: string[] }

type User = Admin | Member

const user: User = { id: 123, role: "member", plans: ["basic", "premium"] }

console.log(user)