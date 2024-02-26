import knex from 'knex';
import config from '../../../knexfile.js';
import dotenv from 'dotenv';

dotenv.config();

const connection = knex(config[process.env.NODE_ENV]);

export default connection;
