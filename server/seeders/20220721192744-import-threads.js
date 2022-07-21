'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Threads',[
      {
        id: 1,
        threadName: "bullwinkle2112",
        threadTitle: "How do I swap coins to different network so I can store them on wallet?",
        threadContent: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        threadRating: 5,
        threadUser: 1,
        threadPostedAt: new Date(),
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
      {
        id: 2,
        threadName: "bullwinkle2112",
        threadTitle: "Some other title!!!",
        threadContent: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        threadRating: 3,
        threadUser: 2,
        threadPostedAt: new Date(),
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
      {
        id: 3,
        threadName: "bullwinkle2112",
        threadTitle: "Last title in db?",
        threadContent: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!",
        threadRating: 7,
        threadUser: 3,
        threadPostedAt: new Date(),
        createdAt: new Date(),
        updatedAt:new Date(),
        deletedAt: null
      },
    ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Threads', null,{});
  }
};
