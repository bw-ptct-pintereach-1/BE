# BEIn this case I would request you to speak with order modification team for further assistance.
order modification department at 1-800-247-2076, option 4. The timings for order modification department is 8 am to 9 pm CST Monday to Friday. Weekend timings for  Order modification department is 8 am to 5 pm CST.



-----------------------------------------### Pintreach ###---------------------------------------------


Base API URL - **https://pintreach1.herokuapp.com/**


--------------------------------------------***DATABASE***----------------------------------------------------

------------------------
***Data Schema for USERS***
------------------------

| name         | type   | required | description            |
| ------------ | ------ | -------- | --------------         |                                                      
| `username`   | String | Yes      | Must be unique         |
| `password`   | String | Yes      |                        |
| `email`      | String | Yes      | Must be unique         |


------------------------
***Data Schema for ARTICLES***
------------------------


| name         | type   | required | description            |
| ------------ | ------ | -------- | --------------         |
| `title`      | String | Yes      | title of article       |
| `author`     | String | Auto     | who wrote the article  |
| `edited_by`  | String | No       |                        |
|`date_written`| Date   | No       |                        |
| `content`    | String | No       | article text content   |
| `url`        | String | No       | link is applicable     |
| `user_id`    | Integer| No       |                        |
| `category_id`| Integer| No       |                        |


------------------------
***Data Schema for CATEGORIES***
------------------------
| name              |id| 
| ------------      |--| 
| `Health`          | 1|
|`Fitness/Excercise`| 2| 
| `Music`           | 3| 
| `Gaming`          | 4|
| `Technology`      | 5| 
| `Home`            | 6| 
| `News`            | 7| 
| `Other`           | 8|          


--------------------------------------***ENDPOINTS***-----------------------------------------------------


#/articles#

|endpoint|description|
|--------|------------------------------------------------------------------|
|**GET** |Returns a list of all articles in the database {id,title,category}|
