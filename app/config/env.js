

const env = {
  database: 'proyecto_hotel_el_dodo',
  username: 'proyecto_hotel_el_dodo_user',
  password: 'UbpbGYWn84R5PRp78Cz1FBoSPdslVePt',
  host: 'dpg-cqlek908fa8c73apqbcg-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;