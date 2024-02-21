# Changelog

## [3.3.0](https://github.com/SouOWendel/op-fvtt-api/compare/v3.2.0...v3.3.0) (2024-02-21)


### Features

* **app routes:** route to login and id param for update notes was been added ([3461e02](https://github.com/SouOWendel/op-fvtt-api/commit/3461e026c3dbc650685a57b9d5bc543f2a709bbb))
* **auth controller:** auth verification with access token through cookies and renewToken function ([aee0efa](https://github.com/SouOWendel/op-fvtt-api/commit/aee0efa796f321f71629099d5af67d5d370e600b))
* **authentication:** now body is used instead of params, create catch in some functions, rename fn ([4d6694e](https://github.com/SouOWendel/op-fvtt-api/commit/4d6694ecdeaf9bb89b668720b4d51773dfb2e403))
* **axios:** enabled cross-site Access-Control requests ([364c153](https://github.com/SouOWendel/op-fvtt-api/commit/364c1534e37b4f1bd3bd386c90f5d03b32b953b6))
* button to return to home was added in consult, create and update pages ([6155769](https://github.com/SouOWendel/op-fvtt-api/commit/61557697afb4ce8be9fcfae4d43837e8a5049a06))
* **check-auth:** check auth has been added to routes create and home ([ad7f5cf](https://github.com/SouOWendel/op-fvtt-api/commit/ad7f5cf4d1f9c7918e4175939835531b4afd4ec6))
* **consult:** consult action was been added to site ([b1603c7](https://github.com/SouOWendel/op-fvtt-api/commit/b1603c71834e08810e65ab66d4a614545ddd8de0))
* **home:** button to edit a note and delete notes without reload the page was been added ([72fa9c3](https://github.com/SouOWendel/op-fvtt-api/commit/72fa9c34ba6fc31a4b8ec3ab18375e0cdceb2d45))
* **login page:** simple login page with authentication has been created ([56f1d60](https://github.com/SouOWendel/op-fvtt-api/commit/56f1d604f76a03443be85ea178e1ff1da65eebe0))
* **notes route:** middleware for verify the authentication was been added in post, put and delete ([f252c81](https://github.com/SouOWendel/op-fvtt-api/commit/f252c81710f66f00ac003464e06a1c8a9d84bbcf))
* **router:** route /auth is now Route /login ([9b47e65](https://github.com/SouOWendel/op-fvtt-api/commit/9b47e65938b04cf05eb82782509ecb4bfaf64e94))
* **token:** refresh Token was been added and generated when login is successful ([22f1a9c](https://github.com/SouOWendel/op-fvtt-api/commit/22f1a9cf0e4e52d2b969c5dde844c1373cdff437))
* **update page:** a link to update note in consult, TINYMCEEDITOR in update page, data in fields ([7d31c56](https://github.com/SouOWendel/op-fvtt-api/commit/7d31c56d8e01fe011af453ef8ce936fe9dbf5727))
* **web home route:** sync the check-auth fetch with data retrieved and navigate between the pages ([2986547](https://github.com/SouOWendel/op-fvtt-api/commit/2986547d25babbc11b3ea045f00741f497bb94bf))


### Bug Fixes

* **auth route:** fixed a double response ([f1da9a7](https://github.com/SouOWendel/op-fvtt-api/commit/f1da9a755f7ca5a4e9c9cef2419048ee8aead4d7))


### Performance Improvements

* **notes schema:** increased the length of content field from 255 (default) to 8000 ([4b33531](https://github.com/SouOWendel/op-fvtt-api/commit/4b335316405ee31f7d08e54867f7bdf39adf1064))

## [3.2.0](https://github.com/SouOWendel/op-fvtt-api/compare/v3.1.0...v3.2.0) (2024-02-18)


### Features

* **crud:** update and delete acts have been added; the intermediate value error has been resolved ([2b919dc](https://github.com/SouOWendel/op-fvtt-api/commit/2b919dca3bed8882b14ce396478286ce8501d371))
* **jest:** tests for validate required fields and password was added for jest unit tests ([9d48886](https://github.com/SouOWendel/op-fvtt-api/commit/9d48886b335771d5bf310b679b71270d0f8a46da))
* **server listener:** console log with localhost + port has been added ([f377b2f](https://github.com/SouOWendel/op-fvtt-api/commit/f377b2fc35f0471aca5f41497b5d623361dfc161))
* **web access:** the view has been created with React, Vite and Axios. Some components been created ([81edfc0](https://github.com/SouOWendel/op-fvtt-api/commit/81edfc0dae68b3d0210b8e4ea00fe3f699f11a52))
* **web:** route for update page, delete button and update data notes with axios was been added ([8e031fb](https://github.com/SouOWendel/op-fvtt-api/commit/8e031fbdb4400c9ac06967e066139834051ab4d3))


### Bug Fixes

* **knex.js:** fixed the config knex file path ([59ec42d](https://github.com/SouOWendel/op-fvtt-api/commit/59ec42d10609ee6ce284bef5024c7f3bc60ff3e5))

## [3.1.0](https://github.com/SouOWendel/op-fvtt-api/compare/v3.0.0...v3.1.0) (2024-02-15)


### Features

* changed the expire time of token from 120s to 600s ([ac5e5f6](https://github.com/SouOWendel/op-fvtt-api/commit/ac5e5f638fbc321ce48b177ba96384c7b6b324e0))
* **notes api:** partial CRUD (findAll, consult, create) of notes was created with postgre and knex ([5820658](https://github.com/SouOWendel/op-fvtt-api/commit/5820658542066145438439e79ae09f59eb23bdc3))
* **notes migration:** schema of notes was created with migrations of Knex ([2da01e4](https://github.com/SouOWendel/op-fvtt-api/commit/2da01e4eabf51597ae3e91b731aa0408fdc5406a))
* **test archive:** test ([cff6a45](https://github.com/SouOWendel/op-fvtt-api/commit/cff6a459e1f17c0752179c5cc3bba640286625a0))
* **user api:** partial CRUD (findAll, create) of user was created with postgre and knex ([21e6240](https://github.com/SouOWendel/op-fvtt-api/commit/21e624073ecaccd77b6f405ab934cf5d703bb9a0))

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
* **notes prototype:** created route for notes and controller for handle ([34f3299](https://github.com/SouOWendel/op-fvtt-api/commit/34f3299754ea1b44ff9b8ee9333c1915872889c4))
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
