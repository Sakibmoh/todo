import { app } from './app.js';
import { connectdb } from './data/database.js';

connectdb();

app.listen(process.env.PORT, () => {
  console.log(`Server is Working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
