import mongoose from 'mongoose';

// Não preciso configurar importar que nem é feito nos models, importando esse arquivo ja funciona

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      user: {
        type: Number,
        required: true
      },
      read: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Notification', NotificationSchema);
