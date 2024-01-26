# Changelog

## [3.0.0](https://github.com/SouOWendel/op-fvtt-api/compare/v2.0.0...v3.0.0) (2024-01-26)


### ⚠ BREAKING CHANGES

* **authentication:** These changes make the API functional with authentication, being a big change for the functioning of the information, compared to the previos version

### Features

* **api with js vanilla:** an API was created with vanilla JavaScript ([3ebd00f](https://github.com/SouOWendel/op-fvtt-api/commit/3ebd00f5a277ece002ae72b72cbc88e36cca4b9d))
* **authentication:** integrated system with JWT, in addition, token auth and verify have been added ([5d6fd9b](https://github.com/SouOWendel/op-fvtt-api/commit/5d6fd9be9317b67c751f1ed65ba7ac0d92b1c3d6))
* **controller auth:** added to control the authentication requests that will be detected ([9a3e7c8](https://github.com/SouOWendel/op-fvtt-api/commit/9a3e7c80b260d3cea6fc2ab7ae97384653f5ed17))
* created the database connection with Knex and authentication with postgreSQL data ([bcc9de8](https://github.com/SouOWendel/op-fvtt-api/commit/bcc9de8574f31f4ad822e40b9e9cc1e062d30837))
* **data:** created data file for store the information for update notes ([7fdb9a9](https://github.com/SouOWendel/op-fvtt-api/commit/7fdb9a9739d3e31b8a02a845bb97879c3e0825b5))
* **express:** initial version of API with Express Framework, this include an CRUD code ([f588c50](https://github.com/SouOWendel/op-fvtt-api/commit/f588c505c1c5c21b77df07d78376a37bb8f58489))
* **http request errors:** some functions are created to handle bad request and unauthorized errors ([c7821b3](https://github.com/SouOWendel/op-fvtt-api/commit/c7821b3fb138f8840cbeb8c6cf063fec0e2abdee))
* **index:** added notes on url, use the auth and .env was adopted within the project ([69d7476](https://github.com/SouOWendel/op-fvtt-api/commit/69d74768155e86c1743ea7c74128863b53a768ad))
* **initial configuration:** added Husky, ESLint, Commitizen, Commitlint, Release Please and Nodemon ([09df358](https://github.com/SouOWendel/op-fvtt-api/commit/09df358576580d479c69645e8ba12547bac2b79c))
* **knex file:** added knexfile for database comunication and create migrations ([697d7c0](https://github.com/SouOWendel/op-fvtt-api/commit/697d7c07163a200b0fa4613d57835ba4674be8b7))
* **knex migrations:** migrations for querys raw and users has been created ([fbef171](https://github.com/SouOWendel/op-fvtt-api/commit/fbef171f8fe7449e6e5c8ba60e8c24589c4e219e))
* **model user:** created the model for process the data and prepare ([bd9411d](https://github.com/SouOWendel/op-fvtt-api/commit/bd9411d3a0fd4267da2657ed2566ad1a46f17938))
* move again ([6a7c6e9](https://github.com/SouOWendel/op-fvtt-api/commit/6a7c6e94f453a54b966b6907364b821e8d04b5ae))
* **npm package:** added and changed some scripts, changes on author name, modules have been added ([7355197](https://github.com/SouOWendel/op-fvtt-api/commit/73551973a4eb598371292f58f001aa5d863e41e6))
* **npm package:** created new script (predev), remove npx for scripts, added pg and knex, ver up ([bd937fc](https://github.com/SouOWendel/op-fvtt-api/commit/bd937fc1a11405c6a3379ca3313cdff47d00cb9d))
* **product controller and route:** added the interaction with the products of the API and the route ([1ed5017](https://github.com/SouOWendel/op-fvtt-api/commit/1ed5017991e9d943bdc2f8533da5cd7af69fe318))
* **release please configuration:** generate alpha versions and switch for manifest on ReleasePlease ([b165fad](https://github.com/SouOWendel/op-fvtt-api/commit/b165fad6bdc1111280f3acb549aac7bcdfe80d86))
* **release-please:** added github actions workflows to base folder ([b59bb19](https://github.com/SouOWendel/op-fvtt-api/commit/b59bb196b28da21de0059e150518d0326296355a))
* **release-please:** the next release is not pre-release, changed the configuration of action ([4d7fccc](https://github.com/SouOWendel/op-fvtt-api/commit/4d7fccc1929f2af8291e7c9ce6e29498527ccb1e))
* **routes auth:** created for handle the routes of api ([9d45c3b](https://github.com/SouOWendel/op-fvtt-api/commit/9d45c3b0b2a5f3562ced085fe478d78c16f74778))
* **user service:** service for authentication with error handle ([4711703](https://github.com/SouOWendel/op-fvtt-api/commit/4711703669b03c639916d42798bc304e0e9b0db8))

## [2.0.0](https://github.com/SouOWendel/op-fvtt-api/compare/v1.0.0...v2.0.0) (2024-01-26)


### ⚠ BREAKING CHANGES

* **authentication:** These changes make the API functional with authentication, being a big change for the functioning of the information, compared to the previos version

### Features

* **api with js vanilla:** an API was created with vanilla JavaScript ([3ebd00f](https://github.com/SouOWendel/op-fvtt-api/commit/3ebd00f5a277ece002ae72b72cbc88e36cca4b9d))
* **authentication:** integrated system with JWT, in addition, token auth and verify have been added ([5d6fd9b](https://github.com/SouOWendel/op-fvtt-api/commit/5d6fd9be9317b67c751f1ed65ba7ac0d92b1c3d6))
* **controller auth:** added to control the authentication requests that will be detected ([9a3e7c8](https://github.com/SouOWendel/op-fvtt-api/commit/9a3e7c80b260d3cea6fc2ab7ae97384653f5ed17))
* **data:** created data file for store the information for update notes ([7fdb9a9](https://github.com/SouOWendel/op-fvtt-api/commit/7fdb9a9739d3e31b8a02a845bb97879c3e0825b5))
* **express:** initial version of API with Express Framework, this include an CRUD code ([f588c50](https://github.com/SouOWendel/op-fvtt-api/commit/f588c505c1c5c21b77df07d78376a37bb8f58489))
* **http request errors:** some functions are created to handle bad request and unauthorized errors ([c7821b3](https://github.com/SouOWendel/op-fvtt-api/commit/c7821b3fb138f8840cbeb8c6cf063fec0e2abdee))
* **index:** added notes on url, use the auth and .env was adopted within the project ([69d7476](https://github.com/SouOWendel/op-fvtt-api/commit/69d74768155e86c1743ea7c74128863b53a768ad))
* **model user:** created the model for process the data and prepare ([bd9411d](https://github.com/SouOWendel/op-fvtt-api/commit/bd9411d3a0fd4267da2657ed2566ad1a46f17938))
* move again ([6a7c6e9](https://github.com/SouOWendel/op-fvtt-api/commit/6a7c6e94f453a54b966b6907364b821e8d04b5ae))
* **npm package:** added and changed some scripts, changes on author name, modules have been added ([7355197](https://github.com/SouOWendel/op-fvtt-api/commit/73551973a4eb598371292f58f001aa5d863e41e6))
* **npm package:** created new script (predev), remove npx for scripts, added pg and knex, ver up ([bd937fc](https://github.com/SouOWendel/op-fvtt-api/commit/bd937fc1a11405c6a3379ca3313cdff47d00cb9d))
* **product controller and route:** added the interaction with the products of the API and the route ([1ed5017](https://github.com/SouOWendel/op-fvtt-api/commit/1ed5017991e9d943bdc2f8533da5cd7af69fe318))
* **release please configuration:** generate alpha versions and switch for manifest on ReleasePlease ([b165fad](https://github.com/SouOWendel/op-fvtt-api/commit/b165fad6bdc1111280f3acb549aac7bcdfe80d86))
* **release-please:** added github actions workflows to base folder ([b59bb19](https://github.com/SouOWendel/op-fvtt-api/commit/b59bb196b28da21de0059e150518d0326296355a))
* **release-please:** the next release is not pre-release, changed the configuration of action ([4d7fccc](https://github.com/SouOWendel/op-fvtt-api/commit/4d7fccc1929f2af8291e7c9ce6e29498527ccb1e))
* **routes auth:** created for handle the routes of api ([9d45c3b](https://github.com/SouOWendel/op-fvtt-api/commit/9d45c3b0b2a5f3562ced085fe478d78c16f74778))
* **user service:** service for authentication with error handle ([4711703](https://github.com/SouOWendel/op-fvtt-api/commit/4711703669b03c639916d42798bc304e0e9b0db8))

## [1.0.0](https://github.com/SouOWendel/op-fvtt-api/compare/v0.3.0...v1.0.0) (2024-01-19)


### ⚠ BREAKING CHANGES

* **authentication:** These changes make the API functional with authentication, being a big change for the functioning of the information, compared to the previos version

### Features

* **authentication:** integrated system with JWT, in addition, token auth and verify have been added ([5d6fd9b](https://github.com/SouOWendel/op-fvtt-api/commit/5d6fd9be9317b67c751f1ed65ba7ac0d92b1c3d6))
* **controller auth:** added to control the authentication requests that will be detected ([9a3e7c8](https://github.com/SouOWendel/op-fvtt-api/commit/9a3e7c80b260d3cea6fc2ab7ae97384653f5ed17))
* **http request errors:** some functions are created to handle bad request and unauthorized errors ([c7821b3](https://github.com/SouOWendel/op-fvtt-api/commit/c7821b3fb138f8840cbeb8c6cf063fec0e2abdee))
* **index:** added notes on url, use the auth and .env was adopted within the project ([69d7476](https://github.com/SouOWendel/op-fvtt-api/commit/69d74768155e86c1743ea7c74128863b53a768ad))
* **model user:** created the model for process the data and prepare ([bd9411d](https://github.com/SouOWendel/op-fvtt-api/commit/bd9411d3a0fd4267da2657ed2566ad1a46f17938))
* **product controller and route:** added the interaction with the products of the API and the route ([1ed5017](https://github.com/SouOWendel/op-fvtt-api/commit/1ed5017991e9d943bdc2f8533da5cd7af69fe318))
* **release-please:** the next release is not pre-release, changed the configuration of action ([4d7fccc](https://github.com/SouOWendel/op-fvtt-api/commit/4d7fccc1929f2af8291e7c9ce6e29498527ccb1e))
* **routes auth:** created for handle the routes of api ([9d45c3b](https://github.com/SouOWendel/op-fvtt-api/commit/9d45c3b0b2a5f3562ced085fe478d78c16f74778))
* **user service:** service for authentication with error handle ([4711703](https://github.com/SouOWendel/op-fvtt-api/commit/4711703669b03c639916d42798bc304e0e9b0db8))

## [0.3.0](https://github.com/SouOWendel/op-fvtt-api/compare/v0.2.0...v0.3.0) (2023-11-29)


### Features

* **express:** initial version of API with Express Framework, this include an CRUD code ([f588c50](https://github.com/SouOWendel/op-fvtt-api/commit/f588c505c1c5c21b77df07d78376a37bb8f58489))
* **npm package:** added and changed some scripts, changes on author name, modules have been added ([7355197](https://github.com/SouOWendel/op-fvtt-api/commit/73551973a4eb598371292f58f001aa5d863e41e6))

## [0.2.0](https://github.com/SouOWendel/op-fvtt-api/compare/v0.1.0...v0.2.0) (2023-11-28)


### Features

* **api with js vanilla:** an API was created with vanilla JavaScript ([3ebd00f](https://github.com/SouOWendel/op-fvtt-api/commit/3ebd00f5a277ece002ae72b72cbc88e36cca4b9d))
* **data:** created data file for store the information for update notes ([7fdb9a9](https://github.com/SouOWendel/op-fvtt-api/commit/7fdb9a9739d3e31b8a02a845bb97879c3e0825b5))
* move again ([6a7c6e9](https://github.com/SouOWendel/op-fvtt-api/commit/6a7c6e94f453a54b966b6907364b821e8d04b5ae))
* **release-please:** added github actions workflows to base folder ([b59bb19](https://github.com/SouOWendel/op-fvtt-api/commit/b59bb196b28da21de0059e150518d0326296355a))

## [0.1.0](https://github.com/SouOWendel/op-fvtt-api/compare/v0.1.0...v0.1.0) (2023-11-22)


### Features

* **initial configuration:** added Husky, ESLint, Commitizen, Commitlint, Release Please and Nodemon ([09df358](https://github.com/SouOWendel/op-fvtt-api/commit/09df358576580d479c69645e8ba12547bac2b79c))
* **release please configuration:** generate alpha versions and switch for manifest on ReleasePlease ([b165fad](https://github.com/SouOWendel/op-fvtt-api/commit/b165fad6bdc1111280f3acb549aac7bcdfe80d86))

## 1.0.0 (2023-11-22)


### Features

* **initial configuration:** added Husky, ESLint, Commitizen, Commitlint, Release Please and Nodemon ([09df358](https://github.com/SouOWendel/op-fvtt-api/commit/09df358576580d479c69645e8ba12547bac2b79c))
