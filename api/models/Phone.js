/**
 * Phone.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    label: {
      type: 'string',
      size: 24
    },

    phone: {
      type: 'string',
      minLength: 10,
      maxLength: 10,
      unique: true
    },

    owner: {
      model: 'contact'
    }

  }
};

