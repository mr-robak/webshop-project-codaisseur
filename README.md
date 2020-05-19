# Webshop project

## Project outline

Groups of two or three

- Two (half) days
- Goals:
  - Practice working together on a Redux app
  - Practice setting up a Redux project

## User stories

- As a customer, I want to see an overview of the products available, sort them by price or popularity, and filter them by some meaningful distinction (for example "tag" or "category")

- As a customer, I want to always be able to see the amount of products in my "shopping cart" (i.e. on every page), and quickly navigate to the shopping cart page

- As a customer, I want to see whether (and if so, how many times) I’ve added a product to my cart, near the relevant products wherever these are shown (e.g. on the homepage or a product page)

- As a customer, I want to get more information on a product on a product-specific page

- As a customer, I want to be able to view my shopping cart, which products are in it, how many times, and what total price that adds up to. I also want to be able to adjust the number of items in that page, and to be able to empty the whole cart.

## Wireframe sketch

included in the react-app folder "webshop_project.png"

## How to get started

- One team member hosts the GitHub repository on their account, adds the other(s) as collaborator

- Spend an hour designing:

  - The structure of the store necessary. Which slices? Maybe a first sketch of dummy data, or an outlinee of the different actions you'll probably use

  - The "theme" of the webshop. Make it as fun, serious, whymsical, stylish, or understyled as you want. I heard one of these student projects in the past was once called "Uncomfortable chair, for uncomfortable prices" — made me laugh :)

- Choose a programming strategy:

  1. Pair programming: you look at the same screen, one team member does the actual coding, but you have to pairs of eyes to figure out what to do. This can be very useful in the first few steps, or when unclear what to do.

  2. Work separately on different features. Create a feature branch off of master using git checkout -b some_feature. This can be very useful to ramp the development speed up, but make sure you communicate well about what is / is not part of what feature. This makes merging easier, and teamwork more pleasant.

- Start out with dummy data, hard-coded in the reducer file(s). As a next step, to practice with thunks and data loading, use https://jsonplaceholder.typicode.com/ to put that dummy data online and use it as if it were a real API.
