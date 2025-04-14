import express from 'express';
import characterRoutes from './routes/characterRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/characters', characterRoutes);

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
