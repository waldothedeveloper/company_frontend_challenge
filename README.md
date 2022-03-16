# Overview
This project will serve as a status tracker, presenting data in a user-friendly table. There was
some interpretation based on the minimal data.

NOTE: Pros & Cons are listed at the end of this document.

## Libraries/Tools used

This project makes use of the following tools and technologies:

● Gatsby JS Framework
● SWR from Vercel/NextJS
● Express-Like Serverless Functions
● TailwindCSS
● @HeadlessUI/React
● Eslint
● Prettier
● Jest
● React Testing Library

## How to run this project

NOTE: The app is fetching the data from the minimal express server provided. So data
will be fetched from http://localhost/api/use_a_number_here_from_1_to_4 . Make sure that the project is already
running before running this one. (npm install && node app.js)
  
This project was created with Gatsby JS, a popular static-site generator framework that uses
React. After unpacking the .tar/zip file. open your terminal console and run the following
commands:
  
1. npm install (this will install all the project’s dependencies)
2. gatsby build && gatsby serve (this will build and serve this project in port 9000)
3. Visit http://localhost:9000

The project will responsively adapt to different screen sizes (devices):

![image of the responsive app](https://github.com/waldothedeveloper/company_frontend_challenge/blob/main/Screen%20Shot%202022-03-16%20at%2012.35.54%20PM.png?raw=true)

The popular SWR library by Vercel provides React Hooks to query the Serverless Function
while providing great features like offering React components a stream of data updates
constantly and automatically, cache, auto revalidation, error handling, prefetching, and many
more.

## Folder Structure

The `components` folder will contain another folder named `status_tracker_feature`.
This folder will contain subfolders that will be grouped based on different abstractions or
encapsulation concepts. For example, the table that displays the data contains 4 main columns:

![table headers](https://github.com/waldothedeveloper/company_frontend_challenge/blob/main/Screen%20Shot%202022-03-16%20at%2012.38.31%20PM.png?raw=true)
Gatsby will display the data in a user-friendly table and will respond to user events.

We can abstract smaller components based on those 4 columns because each column is
associated with very specific tasks/routines within this application.

![image of folder structure](https://github.com/waldothedeveloper/company_frontend_challenge/blob/main/Screen%20Shot%202022-03-16%20at%2012.40.35%20PM.png?raw=true)

## Running Test

We have provided 3 basic unit tests for demo purposes using Jest and React Testing Library .
But more robust test methodologies should be added if this would be implemented in future
production. E2E testing with Cypress is one example, Storybook to test complete UIs based on
component stories is another popular strategy. These and other test technologies such as CI/CD
(Continuous Integration/Continuous Deployment) -for example, CircleCI - should definitely be
applied.

![image of running tests](https://github.com/waldothedeveloper/company_frontend_challenge/blob/main/Screen%20Shot%202022-03-16%20at%2012.41.57%20PM.png?raw=true)


## Pros & Cons

While no approach is completely perfect when building and maintaining an app in real life, as we
know everything has its drawbacks, we humans are lucky to have come up with elegant, robust,
and battle-tested technologies that allow us to build faster and with increased efficiency.

#### Pros

- We are using a robust and flexible framework (GatsbyJS) which offers modern
component architecture, great SEO, as well as multiple rendering techniques (SSR,
DSG), among other benefits.
- We are using a multifaceted React Hooks Library (SWR) with amazing built-in features
such as pagination, revalidation, SSR/SSG ready, etc.
- We are tapping into Serverless Functions that are inherently scalable, run closer to the
user (decrease latency), and require no server management, ‘pay as you go’.
- We implement robust testing technologies that can be quickly coupled with GatsbyJS
(think Jest, Cypress, RTL, etc).

#### Cons

- Using Serverless Functions can bring different drawbacks. If your service depends on
APIs or databases with a rate or connection limits, a spike of traffic will cause two things:
    - your service to scale
    - your service will quickly overrun those limits.
- Serveless Functions are stateless by nature, so additional configuration might be
needed on the cloud DB that handles the stateful data of those Serverless Functions.
For example, to handle sudden spikes concurrent connections (e.g >100).
- Heavy I/O bound work will cause your bill to skyrocket due to compute cycles of those
Serverless Functions, thus concurrent requests should be limited using fully managed
serverless containers.
- Sorting data on a Serverless Function will increase compute cycles, adding to the bill.
