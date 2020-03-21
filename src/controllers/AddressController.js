const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const userExists = await User.findByPk(user_id, {
      include: {
        association: 'addresses'
      }
    });

    if (!userExists) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(userExists);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const userExists = await User.findByPk(user_id);

    if (!userExists) {
      return res.status(400).json({ error: 'User not found' });
    }

    const address = await Address.create({
      user_id,
      zipcode,
      street,
      number
    });

    return res.json(address);
  }
}