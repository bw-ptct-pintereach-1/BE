
### Pintreach ###-----------------------------------------------------------------------------------------


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
| `content`    | String | Yes      | article text content   |
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


**/articles**

| Method | description |
|--------|------------------------------------------------------------------|
|**GET** |Returns a list of all articles in the database {id,title,category}|









**/articles/:id**

| Method | description |
|--------|------------------------------------------------------------------|
|**GET** |(takes in a user_id) Returns a list of all articles in the database written by the user with the given id{returns author,title,content}|
|**POST**|(takes in a user_id) Adds a new article written by user with the given id {requires title,content,category} |
|**DELETE**|(takes in an article_id) Removes article with given id from the database regardless of user







**/articles/:id/saved**



| Method | description |
|--------|------------------------------------------------------------------|
|**GET** |(takes in a user_id) Returns a list of all articles in the database saved by the user with the given id{author,title,content}|
|**POST**|(takes in a user_id) Adds a new article to be saved  by user with the given id |








**/articles/:id/user/:user_id**


| Method | description |
|--------|------------------------------------------------------------------|
|**PUT** |(takes in article_id as first param and  user_id as second) edits article with the given article id and sets the edited_by field to the username associated with the given user_id {requires title,content,category}|








------------------------------------***AUTH***---------------------------------------

**/auth/register**

| Method | description |
|--------|------------------------------------------------------------------|
|**POST** |{ takes a username,password,and email } returns a status of 200 upon successful request, and also returns a user object 


**/auth/login**

| Method | description|
|--------|------------------------------------------------------------------|
|**POST** |{ takes a username and password } returns a status of 200 upon successful request, and also returns an object containing a token and user id

