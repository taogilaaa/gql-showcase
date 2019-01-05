# gql-showcase

This directory contains graphql example and also the REST API comparison based on `graphql-yoga`, extended with Apollo Engine and Express.

Sample: https://gql-showcase-ruykrdomrj.now.sh/

## Get started

**Clone the repository**

**Install dependencies**

```sh
yarn install # or npm install
yarn start   # or npm start
```

**Run the app**

```sh
yarn start   # or npm start
```

## Testing

Open your browser at [http://localhost:4005](http://localhost:4005) and start sending queries.

**Query sample:**

```graphql
{
  people {
    id
    fullName
    email
  }
}
```

The server returns the following response:

```json
{
  "data": {
    "people": [
      {
        "id": 1,
        "fullName": "Michael Suyama",
        "email": "suyama@wp.co"
      },
      {
        "id": 2,
        "fullName": "Nancy DaVolio",
        "email": "davolio@wp.co"
      },
      {
        "id": 3,
        "fullName": "David Buchanan",
        "email": "buchanan@wp.co"
      }
    ]
  }
}
```

**REST API:**

We can also do a `GET` request to `/api/people`

The server returns the following response:

```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Michael",
      "lastName": "Suyama",
      "email": "suyama@wp.co",
      "likedPosts": [1, 2]
    },
    {
      "id": 2,
      "firstName": "Nancy",
      "lastName": "DaVolio",
      "email": "davolio@wp.co",
      "likedPosts": [1]
    },
    {
      "id": 3,
      "firstName": "David",
      "lastName": "Buchanan",
      "email": "buchanan@wp.co",
      "likedPosts": [2, 3]
    }
  ],
  "error": null
}
```

Swagger documentation can be found inside `documentation` folder

**Deployment:**

We can deploy the existing solution by installing [Zeit now](https://zeit.co/now) then running `now`
