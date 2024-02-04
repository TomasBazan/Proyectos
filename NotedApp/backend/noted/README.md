## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO

- [ ] Correct database esqueme
- [ ] Check Migrations
- [ ] Correct Services
- [ ] Add Users to the database
- [ ] Handle migrations
- [ ] Add Services
- [ ] Add tests

# API

- Get All notes: /notes/all
- Get One note: /notes?id={number}
- Delete: /notes?id={number}
- Change one: /notes?id={number}
- One note: /notes?id={number}

- Get All categories: /categories/all
- Get One categories: /categories?id={number}
- Delete: /categories?id={number}
- Change one: /categories?id={number}
- One note: /categories?id={number}
