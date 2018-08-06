const mongo = require('./mongoCommand');

mongo.command('insert', {
    email: 'aaaa08@gmail.com',
    username: 'art123',
    password: '123',
    status: 'active'
});