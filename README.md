# React Cart Checkout Mockup

This is a functional mockup design of Cart Checkout.
It includes one product for demonstrating functionality.
The page created using [React](https://reactjs.org), [React router](https://reactrouter.com) and [react-icons](https://react-icons.github.io/react-icons/).
<br><br>
Cross-browser consistency tested for Google Chrome, Mozilla Firefox, Safari and Opera browsers.

### Quantity
The quantity of product can be changed using + and - buttons. 
Pressing the buttons changes quantity on product card.
Pressing **pencil** or **Update Shopping Cart** buttons will update the **Subtotal** and  **Grand Total** values.

### Removing Product
Product can be removed by pressing **X** button. **"The cart is empty"** message will be displayed instead of the product.

### Shipping cost
Shipping cost is **$23.80** for orders **under $100**. If order value is **above $100** the shipping cost is **$0**.

### Cart totals
Cart total contains Subtotal and Grand Total. 
* **Subtotal** is the price of products in a cart multiplied by the quantity of products.
* **Grand Total** is the Subtotal value plus Shipping cost.

### Proceed to checkout buttons
* **Buttons are enabled** when order value is above $0. 
* Pressing **enabled** buton link the user to checkout confirmation page [http://localhost:3000/checkout-complete](http://localhost:3000/checkout-complete) using react-router-dom Link.
* **Buttons are disabled** and grayed-out When the order value is $0 to prevent sending empty orders. 
* Pressing **disabled** button will show alert informing that "The cart is empty or products quantity is equal zero."


# Running the project

### Installing dependencies

Use `npm install` or `yarn install` to install project dependencies.

### Starting application

Use `npm start` or `yarn start` to start the project.
Project will run on [http://localhost:3000](http://localhost:3000)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
