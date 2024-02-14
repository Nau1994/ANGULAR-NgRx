export interface User{
        "id": Number,
        "name": String,
        "username": String,
        "email": String,
        "address": Address,
        "phone": String,
        "website": String,
        "company": Company
}

export interface Address{
    "street": String,
          "suite": String,
          "city": String,
          "zipcode": String,
}

export interface Company{
    "name": String,
    "catchPhrase": String,
    "bs": String
  }