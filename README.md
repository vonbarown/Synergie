

# Synergie

![Synergie](https://raw.githubusercontent.com/vonbarown/Portfolio/master/src/assets/synergie-landing.png)

## Synopsis
Synergie is a full-stack application where users can post, comment on, and favorite TV shows that they are binging on.

- Synergie authenticate user using express-sessions and passportjs
- Users can **add shows** that they watch currently watching. Which are shared on their profile pages.
- Users can view the profile pages of other users.
- Users can also **add comments** on other users' shows.

## Schema
![database schema](https://raw.githubusercontent.com/vonbarown/Synergie/master/front-end/src/assets/Screen%20Shot%202020-07-07%20at%2010.18.50%20PM.png)

## API Endpoints

Your API Endpoints should include at least:

- **Users**

  | Method | Endpoint     | Description           | Body Data                |
  | ------ | ------------ | --------------------- | ------------------------ |
  | GET    | `/users`     | Get all users         | n/a                      |
  | GET    | `/users/:id` | Get single user by id | n/a                      |
  | POST   | `/users/`    | Add new user          | `avatar_url`, `username` |

- **Genres**

  | Method | Endpoint  | Description    | Body Data    |
  | ------ | --------- | -------------- | ------------ |
  | GET    | `/genres` | Get all genres | n/a          |
  | POST   | `/genres` | Add new genre  | `genre_name` |

- **Shows**

  | Method | Endpoint                 | Description                         | Body Data                                 |
  | ------ | ------------------------ | ----------------------------------- | ----------------------------------------- |
  | GET    | `/shows`                 | Get all shows                       | n/a                                       |
  | GET    | `/shows/:id`             | Get single show by id               | n/a                                       |
  | POST   | `/shows`                 | Add new show                        | `title`, `img_url`, `user_id`, `genre_id` |
  | GET    | `/shows/genre/:genre_id` | Get all shows for specific genre_id | n/a                                       |
  | GET    | `/shows/user/:user_id`   | Get all shows for specific user_id  | n/a                                       |

- **Comments**

  | Method | Endpoint                  | Description                           | Body Data                            |
  | ------ | ------------------------- | ------------------------------------- | ------------------------------------ |
  | GET    | `/comments/show/:show_id` | Get all comments for specific show_id | n/a                                  |
  | POST   | `/comments`               | Add new comment                       | `comment_body`, `user_id`, `show_id` 
  | PATCH   | `/` | Update user comment | n/a

### Front End Routes
| Route                         | Feature                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`/`**                       | Home route. Should just welcome the user to the application. Must include Navbar, links, display message.                                                                                                                                                                                                  |
| **`/users`**                  | Shows master list of all users. Shows the "logged in" user. Should be able to click on each username linking to the user profile page.                                                                                                                                                                     |
| **`/users/:id`**              | User profile page. Shows all the shows the user is watching. Must show the image, title, genre. Should be able to click on the show and take you to the show page.                                                                                                                                         |
| **`/users/:id/addShow`**      | Shows a form where the logged in user can add a new show. Should be able to submit to the Database. These changes are reflected app wide. Selecting the genre is a drop down. This data should be reflecting the genres in the database.                                                                   |
| **`/shows`**                  | Masterlist of all the shows. **Don't repeat the same show twice.** For each show list all the users who are watching. Clicking on the name of the user takes you to that specific users' show profile page. We are assuming that the name of the show has to match exactly to be considered the same show. |
| **`/shows/:id/user/:userId`** | A specific show's profile page for a specific user. Shows the title, image, genre, number of comments and list of comments. Allows you to add new comments. The comment should be reflected immediately on the list without needing to refresh the page.                                                   |
| **`/about`**                  | Shows short description of what this app is about and who made it                                                                                                          | **`/network`**                  | Shows the list other users that the current user has in their network  
 | **`/messages`**                  | Shows all the current chat sessions that the user has open                                                                                                                              |

## Installation 

To install this projects
run the following comman in your terminal
```
git clone https://github.com/vonbarown/Synergie.git
```
To install the dependencies for the back-end folder from root directory
 ```
 cd back-end && npm i
 ```
To install the dependencies for the front-end folder from root directory
 ```
 cd front-end && npm i
 ```

### Starting App
To start the app run these following commands
After cloning the repo run the following commands

Backend
```
 cd back-end && npm run start:dev
```

Frontend
```
 cd front-end && npm start
```
