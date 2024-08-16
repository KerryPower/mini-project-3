# Mini Project 3

**A small local Next.JS APP routed web server for a pizza ordering website.** 

## Installation 

**From a new terminal inside your target directory:**

1. Clone the repository:  
`git clone https://github.com/KerryPower/mini-project-3.git`

2. Navigate into the project directory:     
`cd mini-project-2/next-app`

3. Install dependencies:
`npm install`
    

## Running the server

To start the server:
`npm run dev`
            
The server will now run on http://localhost:3000.

## Frontend usage 

Simply Sliced has grown and now has the following available to view by the user:

- Our Home/Menu Page : [http://localhost:3000](http://localhost:3000) - Menu items can now be filtered for different allergens. 

- Your Order Page (still under development) : [http://localhost:3000/order](http://localhost:3000/order)

- A page all about us : [http://localhost:3000/about](http://localhost:3000/about)

- How you can find/contact us : [http://localhost:3000/contact](http://localhost:3000/contact)

We also now have an admin section for authenticated users to view the following:

- The List of Order : [http://localhost:3000/admin/orders](http://localhost:3000/admin/orders) - 
The orders list can be changed by status using the buttons on top of the page. 

- Employee Info (still under development) : [http://localhost:3000/admin/info](http://localhost:3000/admin/info) 

These can also be navigated by use of the NavBar. 

## Authentication

For authentication we currently have two methods for your use:

- GITHUB authentication - Requires you to login to GITHUB with your credentials (these will need to match what is in the env.local file on your local machine)

- Credentials authenitcation - Requires a username in the format of your lowercase "first.last" names and for the password . . . "password" 

## Backend Usage

API calls can now be made to http://localhost:3000/api/orders

- **GET** calls can be filtered by status.  
- **POST** calls are by id with new JSON data in the request body.   
- **PUT** calls update orders by id with updated JSON data in the request body.  
- **DELETE** calls delete orders by id.
