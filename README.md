# Meta-mars tech-store

> installation - npm init vite

> App Name - Meta-mars

> choose 'react' framework

<h4>after that in terminal</h4>
> npm install
> npm run dev

## Lets Build our React E-Commerce App

1. We gonna build categories with 5 different cards(Gaming, music, merch, Drone, VR headset) and each card is container in itself(inside of it is image and another div with another text element inside it )

2. I'll create a div with classname= 'categories-container' because that pretty much it is 

3.  Inside it we create five different divs that have className='category-container', also this category container will contain all the content inside of it as follows:
```
 <img />
 div with className = 'category-body-container'
 ```

> inside this body-container we will add some more elements
```
 <h2>Hats</h2>
 <p>Shop Now</p>
 ```

Now copy whole categories-container  and paste it five times and change its #h2 with Men, Womens,Sneakers,jackets, hats

it will look like this

``` <div className="categories-container">
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Hats</h2>
      <p>Shop Now</p>
     </div>
    </div>
   </div> 
   ```


 2. After building the structure we gonna apply some basic styling  
and abstracting the work we need to do.

As you can see in the code that all five components are duplicated five times

``` 
<div className="categories-container">
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Hats</h2>
      <p>Shop Now</p>
     </div>
    </div>
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Sneakers</h2>
      <p>Shop Now</p>
     </div>
    </div>
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Jackets</h2>
      <p>Shop Now</p>
     </div>
    </div>
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Men</h2>
      <p>Shop Now</p>
     </div>
    </div>
    <div className='category-container'>
     {/* <img/> */}
     <div className='category-body-container'>
      <h2>Women</h2>
      <p>Shop Now</p>
     </div>
    </div>
   </div>

   ```

We hard-coded it at first place because it was easier thing to do but but but as we scale it doesn't make any sense

acctually we are repeating the same code where values are pretty much same except the values for #h2 and #img

So We can say the category-container structure is same for all five container and what we are doing is just changing the values of it.

So let's optimize it

### instead of hard-coding out these four other containers-section, what we can do is initialize some variable Array

### let's say the variable name is 'categories' and this is gonna be an array which contain objects that reflects what we having here

### let's start with first object and decide how'll we shape it.
 
we know for sure that we have a 'title' value and because every container items are unique ,we'll use 'id'

```
const categories = [
  {
    id: 1,
    title: 'Hats'
  }
]
```


now let's map through these object to our container

```
function App() {
  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    },
  ]

  return (
  <div className="categories-container">
   {categories.map((category) => (
    <div className='category-container'>
     {/* <img/> */}
       <div className='category-body-container'>
         <h2>Hats</h2>
         <p>Shop Now</p>
       </div>
    </div>
   ))}

    
  </div>
  )
}
export default App

```

let's de-structure the 'category' parameter inside map function from

(category) to ({title, id})

and just put this title inside h2 like this

```
<h2> {title}</h2>
```

Overall your code will look like this

```
function App() {
  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    },
  ]


  return (
  <div className="categories-container">
   {categories.map(({title, id}) => (
    <div key={id} className='category-container'>
     {/* <img/> */}
       <div className='category-body-container'>
         <h2>{title}</h2>
         <p>Shop Now</p>
       </div>
    </div>
   ))}

    
  </div>
  )
}

export default App

```

>Here we learnt to convert hard-coded JSX over to more dynamic and reusable version of our JSX


3. Styling with SASS or Sassy CSS

sass is more efficient way of writing CSS

why SASS is better than CSS
because its very intuitive when you reading it, you don't need to mention child-parent class for element in the hierarchy

for example:

### with Css

```
.categories-container{
  background-color: red;
  padding: 10px;
}
.categories-container .category-container {
  background-color: green;
  padding: 20px;
}
.categories-container .category-container .category-body-container {
  background-color: blue;
  padding: 30px;
    }
```

### with Sass
```
.categories-container{
 background-color: red;
 padding: 10px;

  .category-container {
    background-color: green;
    padding: 20px;

     .category-body-container {
       background-color: blue;
       padding: 30px;
    }
  }  
}
```


install SASS

> npm install sass

> lets create a new scss file named 'categories.styles.scss'



```
.categories-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .category-container {
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
  
    &:hover {
      cursor: pointer;
  
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      & .category-body-container {
        opacity: 0.9;
      }
    }
  
    &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
  
    .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  
    .category-body-container {
      height: 90px;
      padding: 0 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      background-color: white;
      opacity: 0.7;
      position: absolute;
  
      h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 22px;
        color: #4a4a4a;
      }
  
      p {
        font-weight: lighter;
        font-size: 16px;
      }
    }
  }
  

```


lets do some change we gonna add some image just change your category array wth this

```
[
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

```

and change the jsx like this

```
{categories.map(({title, id, imageUrl}) => (
    <div key={id} className='category-container'>
     <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
     }} />
       <div className='category-body-container'>
         <h2>{title}</h2>
         <p>Shop Now</p>
       </div>
))}

```

What we wanna do now is realy just start moving what is inappropriate
that means one file to its own separate components

for that we gonna create 'components' folder inside 'src' folder
and then create another folder inside src/components/category-items

Now add two new files inside src/components/category-items

> category-item.component.jsx
> category-item.styles.scss

in category-item.component.jsx we create functional component "CategoryItem"
here we gona recieve the entire object as a prop {category}

and in return we write or copy-paste all the JSX of category-item from App.jsx

```
import './category-item.styles.scss'

const CategoryItem = ({category}) => {

    return (
        <div key={id} className='category-container'>
     <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
     }} />
       <div className='category-body-container'>
         <h2>{title}</h2>
         <p>Shop Now</p>
       </div>
    </div>
    )

}

export default CategoryItem
```

Now remember, we cannot use the 'ID' key here! Why?
> we need to put it to the place where we'll actually caal the map 

but we know we need the image URL, here we can destructure imgaeURL and title or we can directly put it to prop , its yoyr choice

```
const {imageUrl, title} = category;
```

well we pretty much converted this over to its own component


Now come to App.jsx and import CategoryItem

```
import CategoryItem from './components/category-items/category-item.component'
```

and paste the <CategoryItem /> component inside the map

now we know that we need to actualy pass the entire category

```
<CategoryItem key={category.id} category={category} />
```

so the complete code will look like

> App.jsx
```
import CategoryItem from './components/category-items/category-item.component'
import './categories.styles.scss'


function App() {
  const categories = [...!]
  
  return (
  <div className="categories-container">
   {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
   ))}

    
  </div>
  )
}

export default App

```

Now we can't put this category component in App.jsx , we need create a diectory component for categories


## Adding Font Style

here I'm using Work Sans

Google fonts - font-family: 'Work Sans', sans-serif;

put this font-family on 'index.scss'

and the link in 'index.html'

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;600;700&display=swap" rel="stylesheet">
```


## Routing and React-Router

### Routing

<p>Install react router</p>

> npm install react-router-dom@6

now for the routing, we need to need to wrap this application inside  router component

to do so, we need to do first import <b>BrowserRouter</b> component from react-router-dom

```
import { BrowserRouter } from 'react-router-dom';
```
if you are wondering why there is a <b>BrowserRouter</b>, actually BrowserRouter is a generic router, 
It leverages the URL in order to keep track of the history of where the user is navigating through and

it behaves as you typically would expect any kind of routing based on your URL to behave.
Now the browser router, as I mentioned, is a component, so that means it behaves like a component.

There is an open tag and a closing tag.

And what we want to do is we want to make that the parent of our entire application.

```
<BrowserRouter>
  <App />
</BrowserRouter>

```
because we've wrapped our application component inside of our browser router
component, we can access all of the different features that come in rack router dom specific to this
browser router that is now going to control all of routing inside of our nested application.

I'm going to make another folder inside of the routes folder called Home because that's the route we're

trying to make.

Copy-paste whole code of App.jsx and paste it to the new folder with new file component
> src>routes>home>home.component.jsx

and then I did some change

> directory.component.jsx
```
import Directory from '../../components/directory/directory.component'


const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  


  return (
  <Directory categories={categories} />
  )
}


export default Home;
```

They're not these generic components that we're building that we can use in numerous places.

Essentially, these home components are these route level components are really only used for routing.

Now import the whole component in App.jsx

```
import Home from './routes/home/home.component'
```

What we want to do now is we now want to actually leverage routing so that we know how the routing works

with this actually being the thing that only renders when the URL is pointing to home.

So to do this, what we need to do is we need to import the roots component from React router dump.


```
import { Routes, Route } from 'react-router-dom'
```

It's with these two components that we can actually assemble the routing at our application level.

So I want to take routes and just as we did, we want to wrap Anything that is going to be reputable inside of this roots component


```
const App = () => {
  return (
    <Routes>
      <Route />
    </Routes>
  )
}

```
So what essentially Routes does is that it allows this application to register these route level components that will then in turn render a specific component when it matches its specific route that you're looking
for.

So how do you know what route you're trying to match?

Well, the way you do that is you actually give it a specific <b>path</b>.

```
<Route path='/' />
```

Variable path is going to be a string, and the string is going to try to match whatever you give inside of it.

So when you want to match, a slash('/'), this in turn will say, okay,  I match path '/'
meaning that because this is at the base URL level, when we just land on the URL, then I'm going to match.

So you can kind of see slash as and this is the end of the path we're trying to match.

So this is the relative path.

And what I'm going to say here is that the moment this matches, I want you to now render this element.

```
<Route path='/' element={<Home />} />
```
<b>element</b> in this particular case is the component.

And this is going to  render the home component.

You're saying that by using this route component ({Routes, Route}), I expect there to be some routes inside and the moment you match a route where the path value('/') matches the string, then I want you to render(<Home />)




### React Router Outlet


Now inside of the home route, I have switched the path back to just the slash and we're going to dive a little deeper into understanding how this root component works.

> home.component.jsx

```
import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'


const Home = () => {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  


  return (
    <div>
    <Outlet />
  <Directory categories={categories} />
  </div>
  )
}


export default Home;
```

> App.jsx

```
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './routes/home/home.component'


const Navigation = () => {
  return(
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return <h1>I am the shop page</h1>
}


function App() {
 
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />

      </Route>
   </Routes>
  )
}

export default App

```

> navigation.component.jsx

```
import { Fragment } from 'react';
import {Outlet } from 'react-router-dom'


const Navigation = () => {
  return(
    <Fragment>
      <div className='navigation'>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
```


### Authentication and Storage

We're going to leverage a great existing tool made by Google called Firebase.

And what Firebase is going to help us do is we are going to be able to build out our sign in page using

authentication so that we can store the users and refer to those users and sign in those users whenever

anyone wants to access our application.

Luckily for us with Firebase, we can also leverage sign in with Google, which is Google sign in which

we'll talk about after we learn about Firebase first.

So what is Firebase?

Firebase is a Google platform that allows you to spin up a database.

It actually is a pretty comprehensive suite of hosting tools and different things for your website,

but the primary usage is that it helps us leverage some kind of database.

That's the most important thing so that we do not have to set our own up.


> https://firebase.google.com/

now click on <b>Go To Console</b> upon the top-right corner

What this will do is this will take you to the list of all of your existing Firebase projects.

So  you're going  make a brand new project.

I want you to click to this <b>add project</b>

put the name of  project of your choice
eg. Facebook-db

after naming you'll see it generate a unique identifier for your project

click <b>Continue</b>

Next step, they're going to ask if you want Google Analytics.

I don't want Google Analytics because this actually makes it a little bit more complicated. so just disable it

Click <b>Create Project</b>

This will now take you into your actual facebook database or whatever you named your Firebase instance.

there's two main things that I want you to focus on inside of your project.

One is <b>Authentication</b>, and other is database options.

We are going to use <b>firestore database</b> because this is the newest instance.

<b>Realtime database</b> is their old database.

So don't worry about that Just ignore it.

We need to actually allow our React application to leverage Firebase and Fire Store and authentication.
And to do that, we need to install the Firebase Library.

So in order to install Firebase, let's go back to our terminal.

> npm install firebase

So now that we have Firebase installed, what we're going to do is we're just going to go into our application

and just set up a quick route for sign in.

So inside of routes, I'm going to make a new folder called Sign In.

And inside of this folder, let's make a new file called Sign in Component

> routes> sign-in> sign-in.component.jsx

```
const SignIn = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
    </div>
  );
};

export default SignIn;


```


So here, let's duplicate our route path.

And the path should go to sign in.


> App.jsx
```
import SignIn from './routes/sign-in/sign-in.component'


// paste this inside Routes

<Route path='sign-in' element={<SignIn />} />


```








And once we have our sign in, what we also need to add is a way to get there.

So inside of your navigation component, I want you to duplicate this second link and inside say that

it goes to sign in.

> navigation.components.jsx

```
         <Link className='nav-link' to='/sign-in'>
            SIGN IN
         </Link>
```


### Authenticating with Firebase

The first thing that I want you to think about is the fact that we are going to be interacting with

this new API.

The API in this particular case is going to be Firebase.

So in this particular case, what I might do is inside of source, I want to make a new folder and I'm

going to call it Utils.

This is going to contain utility files.

And the one that I want to make is a Firebase utility file.

So I'm going to make a Firebase folder.

And inside a firebase, I'm going to make <b>Firebase.utils.js</b>

> src> utils> firebase> firebase.utils.js

why just .js or javascript
because We're most likely not going to return any JSON from this and this library is just for using Firebase.

Is inside of this utility folder.

Set up everything we need to get started.

So in order for you to use Firebase, you actually need to import from Firebase.

And then '/'.

What is that you want to pull in?

```
import {} from 'firebase/app'
```

So Firebase, is a suite of tools.

Firestore is one of the tools inside.

So this suite, though, you bring down from the library as a thing called the app.

So this captures all of the things required to get Firebase running, including if it's internal services.

So in order for you to get it, you need the <b>initializeApp</b> function.

```
import { initializeApp } from 'firebase/app'
```
This <b>initializeApp</b> function creates an app instance for you based off of some type of config,

This config is an object that allows us to attach this Firebase app instance to that instance that we have online, because right now we have the library installed, but there's no way of us telling Firebase,

 this instance that you're using should be referring to the one that you have created inside of Firebase Console.

 so how do we do this?

 go back to your firebase homepage and click on this Web icon '</>'

 after clicking, Register your app put the nickname related to your projects
 eg- facebook-db-app

 click <b>Register App</b>

 then you'll see its telling us to install  but we've already installed firebase , so you can skip  it

 next you can see its asking us to embed the script tag 
 copy the <b>firebaseConfig</b> and paste it to your <b>firebase.utls.js</b>

  ```
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER",
  appId: "APP_ID"

};

const app = initializeApp(firebaseConfig);


  ```

So here when you paste this in.

You end up passing this to the InitializeApp function that we get from Firebase app.

What this config does is it identifies this SDK, which is essentially a developer kit that we're using.


```
const app = initializeApp(firebaseConfig);
```
So the library itself, this library is just some JavaScript library that abstracts away some of the functionality that we need to use in order to interact with our instance.

this library is just some JavaScript library that abstracts away some of the functionality that we need to use in order to interact with our instance.

So those CRUD actions like creating, reading, updating, destroying, authenticating, all of those things is going to happen using this Firebase app instance.


So now that we have Firebase set up, the next thing we need to do is we need to actually set up the authentication.

Firebase kind of includes a bunch of different library packages for us.

When we installed Firebase, it wasn't just one library, it was a bunch of little micro libraries.

One of them is anything related to authentication, and this is under 'firebase/auth'.
 this is pretty much the auth service

 ```
import {} from 'firebase/auth';
 ```

what we need from here is  <b>getAuth</b> because just like 
<b>initializeApp</b>, we've got to create a auth instance as well.

 ```
import { getAuth } from 'firebase/auth';
 ```

We also need sign in with redirect and sign in with pop up, 

```
import { getAuth, signInWithRedirect, signInWithPopup } from 'firebase/auth';
```

The other thing we need is also Google auth provider, So these are all namespace specifically from Firebase Auth.

```
import { getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
```

So in order to use this Google authentication, we need to first initialize a provider using this Google auth provider class that we received.
So here you want to call new <b>GoogleAuthProvider</b>, which in turn will give you back this provider instance.

```
const provider = new GoogleAuthProvider();

```

Then we will want to do is we want to call <b>setCustomParameters</b>.

So these custom parameters will take some kind of configuration object and with it we can tell different ways that we want this GoogleAuthProvider to behave.

```
provider.setCustomParameters();
```

we want is really just <i>prompt</i> Which will be <i>select_account</i>.

```
provider.setCustomParameters({
    prompt: "select_account"
  });
```

this means is that every time somebody interacts with our provider, we want to always force them to select an account.

The other thing we need to do is we need to export our authentication
```
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
```


> sign-in.components.jsx

```
import {signInWithGooglePopup}  from '../../utils/firebase/firebase.utils'

const SignIn = () => {

   const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
   }

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default SignIn;
```

### Firestore Datebase

> firebase.utils.js
```
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider } from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER",
  appId: "APP_ID"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
  

  // The snapshot allows us to check whether or not there is an instance of it that exists inside of our database And it also allows us to access the data.


  // What I want to do is I want to first check if user data exists. If it does, then I don't want to do anything.I just want to return back this user document reference.If the data does not exist though.So let's say if user data does not exist.So here, this is what happens if user data exists, if user data does not exist.What I want to do is I want to create slash set the document with the data from user in my collection and I want to set it using this user snapshot because remember, it's already pointing to a specific place in a collection for the data that we want.

  // if user data exist, it return true or else false

  if(!userSnapShot.exists()){

    const {displayName, email}  = userAuth;
    const createdAt = new Date();
  

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  } catch (error) {
       console.log('error creating the user', error.message);
  }
}

  return userDocRef;
}

```

> sing-in.component.jsx

```
import {signInWithGooglePopup, createUserDocumentFromAuth}  from '../../utils/firebase/firebase.utils'

const SignIn = () => {

   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
   }

    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default SignIn;
  
```