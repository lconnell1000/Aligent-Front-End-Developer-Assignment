# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

You need to run this first as the node_modules were not uploaded to the repository

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Usage

Once you have loaded the page, you can type in a search into the top left hand corner and click on the search icon to start a search. You can apply the years or type filter either before or after the search. If you apply them after you have made the search the results will update. If you want to change the search input you must click the search icon again to update the results.

## API Consideration's

Due to the limitations of the OMBD Api, I had to make an array of all the movies being returned before I applied the year's filter on it. This is because the API can only search for 1 year at a time if you use year's as a query paramater when making an API call. I could have searched for all years within the range but this would not allow for if there was more than one movie/episode/series with a similar name made in that year. What I did to solve this was figured out the total amount of page's for all the results with no year filter applied, and made an API call for all those pages to make an array of all the movies. Then I was able to filter this array by year's to return the desired array of movies that resided within those year's.

