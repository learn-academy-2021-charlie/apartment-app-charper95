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