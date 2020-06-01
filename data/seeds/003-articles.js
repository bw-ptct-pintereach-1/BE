
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("articles")
    .truncate()
    .then( function () {
      // Inserts seed entries
      return knex("articles").insert([
        {
          title: "Who would win in a republican vs democrat cage match?",
          author: "tim timson",
          date_written: "03/25/2018",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 8,
          user_id: 2,
        },
    
        {
          title: "Top 5 Rappers of all Time",
          author: "flex flexson",
          date_written: "01/22/2016",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 3,
          user_id: 2,
        },
    
        {
          title: "How the gaming community ruins games",
          author: "game-guy",
          date_written: "02/02/2020",
          content:
            "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 4,
          user_id: 5,
        },
    
        {
          title: "whats in your water?",
          author: "news-guy",
          date_written: "03/04/2017",
          content:
            "Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 7,
          user_id: 1,
        },
        {
          title: "Why did 69 snitch?",
          author: "angry-guy",
          date_written: "05/17/2020",
          content:
            "Aliquam eleifend mi in nulla pvvosuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 3,
          user_id: 2,
        },
        {
          title: "Traces of BigFoot found in mans backyard?",
          author: "conspiracy-guy",
          date_written: "01/27/2010",
          content:
            "Aliquam eleifend mi in nulla pvvosuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",
          category_id: 8,
          user_id: 3,
        },
      ]);
    });
};
