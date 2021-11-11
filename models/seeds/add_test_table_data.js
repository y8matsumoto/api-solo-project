exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("courses")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("courses").insert([
        {
          name: "Daichiba country Club",
          place: "Chiba",
          best_score: 85,
          last_score: 89,
          memo: "My home course."
        },
        {
          name: "G8 Country Club",
          place: "Shizuoka",
          best_score: 97,
          last_score: 97,
          memo: "I met family of deer!!!."
        },
        {
          name: "Daystar Golf Club",
          place: "Chiba",
          best_score: 93,
          last_score: 93,
          memo: "Close soon. Good bye Daystar."
        },
        {
          name: "Chisan Fuji Country",
          place: "Shizuoka",
          best_score: 97,
          last_score: 100,
          memo: "Always back tee. Battery Green."
        },
        {
          name: "Tomioka golf Club",
          place: "Gunma",
          best_score: 94,
          last_score: 94,
          memo: "My friend's father work here."
        },
        {
          name: "Chiba Isumi Golf Club",
          place: "Chiba",
          best_score: 98,
          last_score: 98,
          memo: "Large Course.Little difficult."
        },
        {
          name: "Sagamiko Golf Club",
          place: "Kanagawa",
          best_score: 94,
          last_score: 94,
          memo: "Good maintained course."
        },
        {
          name: "Karuizawa 72 West",
          place: "Nagano",
          best_score: 93,
          last_score: 93,
          memo: "Enjoy resort golf!!!"
        }
      ]);
    });
};
