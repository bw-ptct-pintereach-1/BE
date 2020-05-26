
exports.seed = async function(knex) {
  
      return knex('articles').insert([
        {title:"Is trump getting elected again?"  ,author: "tim timson" ,date_written: "03/25/2018" ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie" ,category_id:8,user_id:2},

        {title:"Top 5 Rappers of all Time"  ,author:"flex flexson"  ,date_written:"01/22/2016"  , content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie",category_id:3,user_id:2},

       {title:"How the gaming community ruins games"  ,author:"game-guy"  ,date_written:"02/02/2020" ,content:"Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Risus feugiat in ante metus dictum. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Vitae ultricie" ,category_id:4,user_id:2},

        // {title:  ,author:  ,date_written:  ,category_id},
        // {title:  ,author:  ,date_written:  ,category_id},
        // {title:  ,author:  ,date_written:  ,category_id},
        
      ]);
 
};
