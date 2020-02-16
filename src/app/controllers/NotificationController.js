import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true }
    });

    if (!isProvider) {
      return res
        .status(400)
        .json({ error: 'Only provider can load notifications.' });
    }

    const notifications = await Notification.find({
      user: req.userId
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    // Encontra e atualiza dados findByIdAndUpdate
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true } // Retorna o dado atualizado
    );

    return res.json(notification);
  }
}

export default new NotificationController();