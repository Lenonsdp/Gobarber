import user from '../models/User';
import file from '../models/File';

class ProviderController {
  async index(req, res) {
    const provider = await user.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: file,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }
      ]
    });

    return res.json(provider);
  }
}

export default new ProviderController();
