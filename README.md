# Project_2

## Table of contents  
* [Task Description](#Task-description)
* [ScreenShots](#ScreenShots)

## Task Description
Overview: The purpose of this project is to create a blog application using React, Redux, Redux Toolkit, Vitest, and React Router. The blog server will be provided, and be a barebones implementation of RESTful HTTP routes to CRUD (create, read, update, delete) blog posts that persist in a data.json file. The server will provide routes for blog post creation, reading, updating, and deleting. The blog posts will consist of two properties: title and content, both of which should be treated as strings. In addition, the server will also provide properties for id, last updated, and originally published.

Requirements:

Clone and start up the blog server from https://github.com/matgargano/dummy-blog-server.
Use the latest React, Redux, Redux Toolkit, Vitest, and React Router versions to create a React application with the following features:
A consistent header and footer on each page with navigation links for HOME, CREATE, etc. The navigation item for the current page should be bold.
The following routes at a minimum:
* VIEW:
  * / – homepage, list out the existing blog posts
  * /blog/{ID} – individual blog post
* CREATE/UPDATE:
  * /create – a form to add a blog post
  * /blog/{ID}/edit
* Ability to perform all 4 CRUD operations for blog posts: create, read, update, delete
* When viewing a blog post, display the last updated, originally published dates along with the blog post’s content
* A loading state for when the app is retrieving the content
* Unit tests for each component
* Use ESLint along with Prettier for code quality and consistency.

## Screenshots
<img src="https://user-images.githubusercontent.com/89614960/232974560-a58f3202-fa25-432d-b639-98249ee47c92.png" width=60% height=60%>

The above image shows the home page, where a list of the blog posts will be displayed.

<img src="https://user-images.githubusercontent.com/89614960/232974670-4a3592c8-5ca6-4a2d-b7d8-0dc229ae7ee3.png" width=60% height=60%>

The above image shows the create page, where a user can write a blog post to upload to the website.

<img src="https://user-images.githubusercontent.com/89614960/232975044-a7b5b329-d5b9-48f2-a706-dc3c02eb8e29.png" width=60% height=60%>

The above image shows a specific blog post that a user clicked on, giving them the option to edit or delete the post.

