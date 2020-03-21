const { Op } = require('sequelize');
const User = require('../models/User');


module.exports = {
  async show(req, res) {
    // Encontrar todos os usuarios que tem email que termina com @gmail.com
    // Desses usuarios eu quero buscar todos que moram na rua tal
    // Desses usuarios eu quero buscar as tecnologias que começam com react

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua Afonso Natário' } },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'react%'
            }
          }
        },
      ]
    })
    return res.json(users);
  }
}