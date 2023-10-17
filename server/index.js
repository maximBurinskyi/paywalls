import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

//data imports
import User from './models/User.js';
import { dataUser } from './data/index.js';

dotenv.config();

// Project 1 (configuration)
// const configuration = new Configuration({
//   basePath: PlaidEnvironments.sandbox,
//   baseOptions: {
//     headers: {
//       'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
//       'PLAID-SECRET': process.env.PLAID_SECRET,
//     },
//   },
// });

// const plaidClient = new PlaidApi(configuration);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// Project 1 (1 endpoint)
// app.post('/create_link_token', async function (request, response) {
//   const plaidRequest = {
//     user: {
//       // This should correspond to a unique id for the current user.
//       client_user_id: 'user',
//     },
//     client_name: 'Plaid Test App',
//     products: ['auth'],
//     language: 'en',
//     redirect_uri: 'http://localhost:3001/',
//     country_codes: ['US'],
//   };
//   try {
//     const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
//     response.json(createTokenResponse.data);
//   } catch (error) {
//     response.status(500).send('failure');
//   }
// });

// Project 1 (third endpoint)
// app.post('/auth', async function (request, response) {
//   try {
//     const access_token = request.body.access_token;
//     const plaidRequest = {
//       access_token: access_token,
//     };

//     const plaidResponse = await plaidClient.authGet(plaidRequest);
//     response.json(plaidResponse.data);
//   } catch (e) {
//     response.status(500).send('failed');
//   }
// });

// Project 1 (second endpoint)
// app.post('/exchange_public_token', async function (request, response, next) {
//   const publicToken = request.body.public_token;
//   try {
//     const plaidResponse = await plaidClient.itemPublicTokenExchange({
//       public_token: publicToken,
//     });

//     // These values should be saved to a persistent database and
//     // associated with the currently signed-in user
//     const accessToken = plaidResponse.data.access_token;
//     //const itemID = response.data.item_id;

//     response.json({ accessToken });
//   } catch (error) {
//     // handle error
//     response.status(500).send('failed');
//   }
// });

//Mongoose setup
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));

// Project 1 (working server)
// app.listen(PORT, () => {
//   console.log('server has started');
// });
