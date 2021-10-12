
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('film').del()
    .then(function () {
      // Inserts seed entries
      return knex('film').insert([
        {id: 1, brand: "Kodak", name: 'Portra 160', iso: 160},
        {id: 2, brand: "Kodak", name: 'Portra 400', iso: 400},
        {id: 3, brand: "Kodak", name: 'Portra 800', iso: 800},
        {id: 4, brand: "Kodak", name: 'Ektar', iso: 100},
        {id: 5, brand: "Kodak", name: 'Ektachrome', iso: 100},
        {id: 6, brand: "Kodak", name: 'Gold', iso: 200},
        {id: 7, brand: "Kodak", name: 'Color Plus', iso: 400},
        {id: 8, brand: "Fuji", name: 'Color', iso: 200},
        {id: 8, brand: "Fuji", name: 'Superia Xtra', iso: 400},
        {id: 10, brand: "Fuji", name: 'Color Pro 400H', iso: 400},
        {id: 11, brand: "Fuji", name: 'Velvia', iso: 50},
        {id: 12, brand: "Fuji", name: 'Velvia', iso: 100},
        {id: 13, brand: "Fuji", name: 'Provia 100F', iso: 100}
      ]);
    });
};
