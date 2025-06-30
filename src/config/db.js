import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectMongo() {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log('✅ Mongo conectado');
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    process.exit(1); // Finaliza la app si falla la conexión
  }
}
