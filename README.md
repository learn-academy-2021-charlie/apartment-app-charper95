# Apartment App

### Setup
- Made a Rails app, and db
- Added the remote from github, created default branch

### Add Devise
- Branch: adding-devise
- Adding Rspec
 - $ bundle add rspec-rails
 - $ rails generate rspec:install
- Adding Devise
 - $ bundle add devise
 - $ rails generate devise:install
 - $ rails generate devise User
 - $ rails db:migrate
 - In config/environments/development.rb
    - Add to line 41 & 42
    - #Devise
    - config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

### Apartment Model
- $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- $ rails routes
- $ rails db:migrate
- Define relationship between User and Apartment
    - in app/models/apartment.rb
    - belongs_to :user
    - in app/models/user.rb
    - has_many :apartments

- $ rails c
- => s = User.first
- => s.apartments.create street: '123 Street', city: 'SD', st
ate: 'CA', manager: 'Joe', email: 'joe@testing.com', price: '1000', b
edrooms: 2, bathrooms: 3, pets: 'all pets welcome'

- in db/migrate/seeds.rb
    - add:
    - users = [
        {
            email: 'testing@test.com',
            password: 'testing123',
            password_confirmation: 'testing123'
        }
    ]
    - users.each do |attribute|
        User.create attribute
    end
    - apartments = [
        {
            street: "123 Street",
            city: "SD", 
            state: "CA", 
            manager: "Joe", 
            email: "joe@testing.com", 
            price: "1000", 
            bedrooms: 2, 
            bathrooms: 3, 
            pets: "all pets welcome"
        },
        {
            street: '456 Street',
            city: 'SD',
            state: 'CA',
            manager: 'Joe',
            email: 'joe@testing.com',
            price: '1000',
            bedrooms: 2,
            bathrooms: 3,
            pets: 'no snakes'
        }
    ]
    - first_user = User.where(email: 'testing@test.com').first
    - apartments.each do |attribute|
        first_user.apartments.create attribute
    end

- $ rails db:seed
- created seeds

### Adding React
- Branch: adding-react
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails generate react:component App
- $ rails generate controller Home

- Create index.html.erb in app/views/home
    - Add <%= react_component "App" %> to index.html.erb

- In config/routes.rb
    - add root 'home#index'

- In index.html.erb
    - Add:
        - <%= react_component "App", {
            logged_in: user_signed_in?,
            current_user: current_user,
            new_user_route: new_user_registration_path,
            sign_in_route: new_user_session_path,
            sign_out_route: destroy_user_session_path
        } %>

- Added devise information to App.js:
    - const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
    } = this.props
    - console.log("logged in?", logged_in)
    - console.log("current user:", current_user)

- $ yarn add react-router-dom
- Route the index.html.erb page to the root:
    - This route directs all HTML traffic to the 'home#index' route, but ignores non HTML traffic, like our API requests. That is perfect to interact with the React router.
    - get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }

- Create folders in app/javascript/components
    - assets
    - pages
    - components

- In config/initialize/devise.rb
    - replace config.sign_out_via = :delete to config.sign_out_via = :get

- In App.js add:
    - { logged_in &&
        <div>
        <a href={ sign_out_route }>Sign Out</a>
        </div>
    }
    { !logged_in &&
        <div>
        <a href={ sign_in_route }>Sign In</a>
        </div>
    }

- Configured the devise sign out route to be a get request
- Checked the sign in and sign out routes with conditional rendering

### User Stories
- Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
    - Index

- Story: As an un-registered guest on the website, I can click on an apartment to view its details
    - Show

- Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages
    - Header Component

- Story: As a un-registered guest, I can go to registration page with a form and register as a new user
    - Devise, navigation from Header Component

- Story: As a registered user who has not logged in, I can go to a login page
    - Devise, navigation from Header Component

- Story: As a logged in user, I should be able to log out
    - Devise, navigation from Header Component

- Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment
    - Create, only if you are logged_in, Devise

- Story:: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else
    - Edit, only apartments with the foreign key of the current user

### Devise & Header
- Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
    - Index
- Story: As a registered user who has not logged in, I can go to a login page
    - Devise, navigation from Header Component
- Story: As a logged in user, I should be able to log out
    - Devise, navigation from Header Component
- Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages
    - Header Component

- Process:
    - Header Component (done)
    - Styling (TODO)
    - Navigation to Devise (done)
    - Navigation Index (done)
        - Create index page
        - define route to index page
    - Testing the Header
        - jest
        - enzyme
        - add to  package.json:
            - "jest": {
                "roots": [
                    "app/javascript/components"
                ]
            }

- Make Header.js in app/javascript/components/components
- Add Basic code & <h1>Apartment App</h1>
- Remove h1 in App.js & import Header from './components/Header'
- Replace with Header Component
- Make ApartmentIndex.js with Basic Code to pages

- TODO: Testing the Header
- TODO: More Styling on the Header

- In app/javascript/components/components
    - Create Header.test.js

### Read Functionality
- Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
    - Index
        - Have an index page but nothing on it yet
- Story: As an un-registered guest on the website, I can click on an apartment to view its details
    - Show