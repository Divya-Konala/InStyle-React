## InStyle Web Application

### Description:
InStyle is an elegant web application that showcases a collection of ladies' occasion wedding dresses. Users can browse through a wide range of dresses and view product details

### Deployment Link:
Access the application at `https://in-style-react.vercel.app/`.

### Technologies Used:
- React.js for front-end development
- Redux for state management
- Chakra UI for styling
- React Router for navigation
- Axios for API requests
- Redux Thunk for handling asynchronous actions

### Files:

1. **App.jsx**: The main entry point of the application. It sets up the Redux store, fetches products on mount, and renders the navigation bar and main content.

2. **HomePage.jsx**: Renders the homepage with a poster and a list of products.

3. **ProductDetailPage.jsx**: Displays detailed information about a selected product, including images, description, and price.

4. **AllRoutes.jsx**: Defines all the application routes using React Router.

5. **Navbar.jsx**: Contains the navigation bar component with links to different pages and search functionality.

6. **ProductsCatalog.jsx**: Renders a catalog of products in a grid layout.

7. **Loading.jsx**: A simple loading rectangular animated boxes component for showing loading states.

8. **Store.jsx**: Contains the Redux store, action creators, reducers, and API calls using Axios to fetch products and product details.

### Setup:
1. Install the required dependencies using `npm install`.

2. Ensure you have the required API key and host for the rapidAPI requests.

3. Start the development server using `npm run dev`.


### Note:
- Ensure you have a stable internet connection to fetch products and details from the external API.
