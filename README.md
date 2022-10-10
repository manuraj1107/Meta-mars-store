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

### Sign-In with Redirect

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
    prompt: "select_account",
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider); 

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
  

 
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


> sign-in.components.jsx

```
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect}  from '../../utils/firebase/firebase.utils'

const SignIn = () => {
useEffect(async () => {
 const response = await getRedirectResult(auth);
 if(response) {
  const userDocRef = await createUserDocumentFromAuth(response.user);
 }
}, []);


   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
   };


    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      </div>
    );
  };
  
  export default SignIn;

```

### SignUp Form

Lets build a SignUp Form

first create a folder named <b>sign-up-form</b> inside <b>components</b> folder

Create a new file named sign-up-form.components.jsx

> sign-up-form.components.jsx

```
const SignUpForm = () => {
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" required />

                <label>Email</label>
                <input type="email" required />

                <label>Password</label>
                <input type="password" required />

                <label>Confirm Password</label>
                <input type="password" required />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;

```
import SignUpForm inside sign-in component

> sign-in.components.jsx

```
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


// inside return

<button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
```

### Sign-up form pt-1

```
import {useState} from 'react';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields);
   const {displayName, email, password, confirmPassword} = formFields;

   const handleChange = (event) => {
       const {name, value} = event.target;

       setFormFields({...formFields, [name]: value });
   }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
```


###  Sign-Up Form pt-2

> sign-up-form.components.jsx

```
import {useState} from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {

   const [formFields, setFormFields] = useState(defaultFormFields);
   const {displayName, email, password, confirmPassword} = formFields;

   console.log(formFields);

   const resetFormField = () => {
    setFormFields(defaultFormFields)
   }

   const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
        alert('passwords do not match')
        return;
    }

    try {
     const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
     );
     
     await createUserDocumentFromAuth(user, {displayName} );
     resetFormField();
    } catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use');
        }
        else{
       console.log('user creation encountered a error', error);
    }
    }
   };

   const handleChange = (event) => {
       const {name, value} = event.target;

       setFormFields({...formFields, [name]: value });
   }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;
```


> firebase.utils.js

```
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTfuUdHnrWmQUSebfcJvybiqnvyKGQFuQ",
    authDomain: "meta-mars-db.firebaseapp.com",
    projectId: "meta-mars-db",
    storageBucket: "meta-mars-db.appspot.com",
    messagingSenderId: "446327056706",
    appId: "1:446327056706:web:c69910ac6033f9fd7e80db"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    
    ) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
  

  if(!userSnapShot.exists()){

    const {displayName, email}  = userAuth;
    const createdAt = new Date();
  

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    })
  } catch (error) {
       console.log('error creating the user', error.message);
  }
}

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

```


### Generalizing Form Input

> assets> components> form-input> form-input.component.jsx 

> form-input.component.jsx

```
import './form-input.styles.scss';
const FormInput = ({label, ...otherProps}) => {

    return(
        <div className="group">
         <input className="form-input" {...otherProps} />
        {label && (
            <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`} >{label}</label>
        )}
               
        </div>
    )
}

export default FormInput
```

> sign-up-form.components.jsx

```
import FormInput from '../form-input/form-input.component';

// replace the form with this 

<form onSubmit={handleSubmit}>
                
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />

                
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />

                
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />

                
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
```

#### Adding Button component

there are three types of button default(black-white), inverted(white-black) and Google sign-in(blue)

> components> button> button.component.jsx

> button.component.jsx

```
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>{children}</button>
    )
}

export default Button;
```

here 
1. children prop is for button text like <b>SIGN-IN</b>, <b>ADD TO CART</b> and <b>GOOGLE SIGN-IN</b>.

2. buttonType is for BUTTON_TYPE_CLASSES.

3. ...otherProps will contain type of button which could be "text", 'submit' etc




> button.styles.scss

```
.button-container {
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  
    &.google-sign-in {
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
    }
  
    &.inverted {
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    }
  }
  
```
Just change 'button' tag with Button Component
> sign-up-form.component.jsx

```
import Button from '../button/button.component';



<Button type="submit">Sign Up</Button>
```


#### Rename Sign-in folder and Sign-in component to authentication and authentication.component



### React-Context for state management

let's see how to create a context in the first place

It's very similar to a component that wraps around all of your other components that
need access to this context. context you can kind of see as a storage place, except it's a component
that exclusively stores things, so lets build something with context inside of your src folder. create a folder
named contexts and inside it craete a file named <b>user.context.jsx</b>

So, In order to use this context, we need to first create a Context, and we'll do it using <b>createContext</b> method that we get form react.

```
import { createContext } from 'react'
```

Now, In order to create this context, we first need to actually export out the context itself.

So you can see the context as being two pieces:
<ul>
<li>one is the actual storage thing itself, and this is the <b>literal context</b> but for us because it's a user context, we going to call it <b>UserContext</b> and this is equal to calling <b>createContext</b> which will build out a context for us</li>
</ul>

```
import { createContext } from "react";

// look it as the actuall value you want to access
export const UserContext = createContext({

})
```

what we want to pass to it is the default value, not necessarily the initial value, but kind of like the default value

<ul>
<li>Then there is also going to be a provider</li>
</ul>

Now we want to export both of these, the context(<b>UserContext</b>) and the provider(<b>UserProvider</b>).

> So a provider is the actual component

This user provider is going to be this literal functional component.

```
export const UserProvider = ({children}) => {

}

```

what we do is we receive children and And  to return <b>UserContext.Provider</b>

```
export const UserProvider = ({children}) => {
 return <UserContext.Provider></UserContext.Provider>
}

```

So on every context that gets built for us, there is a Provider and the .Provider is the component
that will wrap around any other components that need access to the values inside.
In here we are just going to render the children.

```
export const UserProvider = ({children}) => {
 return <UserContext.Provider>{children}</UserContext.Provider>
}

```
So we want to take this children and then put it around our <b>UserContext.Provider</b>.
This is really just some kind of alias component that allows us to use this UserContext provider and
wrap the children.

So what else do we need to pass to this provider?
Well, this provider is where it's going to receive the value, which is going to hold the actual contextual
values.


```
export const UserProvider = ({children}) => {
 const [currentUser, setCurrentUser] = useState(null);
 const value = {currentUser, setCurrentUser};

 return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
```

What we know is that we want to store a user object.So current user, for example, and what we can do because is a component is leverage all of our hooks that allow us to store things.So we want to store a user state.
Let's just use the use state hook.And here I'm going to say that current user gets both the actual value but also the setter function.And I want to be able to initialize this value as null.

```
const [currentUser, setCurrentUser] = useState(null);
```

Next,What I want to do is I want to actually generate the value that I'm going to pass in here.
So this is going to be an object that passes the two values that are important, which is both the <b>currentUser</b> as well as the <b>setCurrentUser</b>.So both the setter function and the actual value.

```
const value = {currentUser, setCurrentUser};
```
So what you can think about with this provider is that this provider is essentially allowing any of
its child components({children}) to access the values inside of its <b>useState</b>.So we're just doing just as we normally do, we have a value for that.

```
return <UserContext.Provider value={}>{children}</UserContext.Provider>
```
But I want to be able to call this setter and get the value anywhere inside of the component
tree that is nested within this actual provider value.which means the value can be access globally if its nested inside the .Provider.

So then all we do is we pass this value into here
```
value={value}
```

 and now we go back to this context and remember we're

trying to instantiate the initial point of this

```
import { createContext, useState } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
   }
```

Now In our <b>index.js</b>

we gonna import the context which is UserProvider component from our context folder

> main.js
```
import { UserProvider } from './contexts/user.context'

```
Now we all need to do is wrap our '<App />' inside the UserProvider,
```
<BrowserRouter>
      <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter>
```
Now any component inside of this UserProvider, nested deeply inside the '<App />' can access the context value inside of the provider itself, meanwhile anything outside the UserProvider component cannot access the context.

Now inside of our <App />,we want the Sign-in-Form Component to be able to access the context because whenever the user signed in, we want to take this user object and store it inside the context

```
try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    
```

for storing the context,we need to do two things!

First we need to use the <b>useContext</b> hook

```
import {useContext} from 'react';
```
Second, we need to bring in the actuall context itself

```
import { UserContext } from '../../contexts/user.context'
```
This <b>UserContext</b> object will going to give us back the whatever <b>value</b> passed in for the <b>value</b>

```
// inside user.context.jsx

return <UserContext.Provider value={value}>{children}</UserContext.Provider>
```

and our value is the currentUser of the useState as well as the setter function
```
 const [currentUser, setCurrentUser] = useState(null);
    
```

So this <b>value</b> we have instantiated as an object
```
const value = {currentUser, setCurrentUser};
```
so we'll get this exact object back with whatever the current values inside of the UserProvider's useState is currently set up.

So inside sign-in-form.componets.jsx we import UserContext

```
import { UserContext } from '../../contexts/user.context';
```
In order to utilize it what we need to do is, calling useConetxt with inside parameter UserContext, so as we now we'll get back the object, for our sign-in form we'll just set the value let's put the name setCurrentUser.
```
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

// Come down and put it Here 
  const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
```

and I'm gonne run the setCurrentUser whenever  this <b>user</b> value comes back

```
try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
     setCurrentUser(user);
```

Now what we wanna do is access this value inside of the our navigation.component
so inside our navigation.component we do the same importing useContext and UserContext
> navigation.component.jsx
```
import { useContext} from 'react';
import { UserContext } from '../../contexts/user.context';
```

But this time we want with context the currentUserValue not the setter
we gonna call useContext the same way we did before in sign-in-form, where we pulling the setter function inside of our form.

But this time I want the actuall value of the currentUser

```
const Navigation = () => {

  // put it here
  const {currentUser} = useContext(UserContext);
  console.log(currentUser)
  return(
    <Fragment>
      <div className='navigation'>
      <Link className='logo-container' to='/'>
        <p className='logo'>Logo</p> 
        </Link>
        <div className='nav-links-container'>
         <Link className='nav-link' to='/shop'>
            SHOP
         </Link>
         <Link className='nav-link' to='/auth'>
            SIGN IN
         </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

```

> What will happen or happening in this whole process?
> Why this componenet will ran?

So Once we console logged in currentUser that means our functional component re-renders, the reason why?

```
const {currentUser} = useContext(UserContext);
```
because the useContext as the hook tell this component that whenever the value inside of this context updates!! re-render me!!
because we are leveraging this currentUser value, we are saying we want you to run my functional component and re-render me

because this value inside of the <b>UserContext</b> is updated

```
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
   }

```

and the reason why it triggers is because of useState being called with the setter function
```
const [currentUser, setCurrentUser] = useState(null);
```

so as we know the component re-render whenever its state updates or whenever its prop changes


### React Context Continued

#### Product Context

create a file named <b>shop-data.json</b> inside src folder

```
[
    {
      "id": 1,
      "name": "Brown Brim",
      "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      "price": 25
    },
    {
      "id": 2,
      "name": "Blue Beanie",
      "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      "price": 18
    },
    {
      "id": 3,
      "name": "Brown Cowboy",
      "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      "price": 35
    },
    {
      "id": 4,
      "name": "Grey Brim",
      "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
      "price": 25
    },
    {
      "id": 5,
      "name": "Green Beanie",
      "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
      "price": 18
    },
    {
      "id": 6,
      "name": "Palm Tree Cap",
      "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      "price": 14
    },
    {
      "id": 7,
      "name": "Red Beanie",
      "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
      "price": 18
    },
    {
      "id": 8,
      "name": "Wolf Cap",
      "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
      "price": 14
    },
    {
      "id": 9,
      "name": "Blue Snapback",
      "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      "price": 16
    }
  ]
```

> Inside context folder create file named <b>product.context.jsx</b>

```
import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
```

> Inside routes create shop folder and create two new files

> shop.component.jsx

```
import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../contexts/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
```


> shop.styles.scss

```
.products-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
  }
```


Now Change some code for <b>App.jsx</b> and <b>main.jsx</b>

> App.jsx

```
import { useContext } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { UserContext } from './contexts/user.context'
import Home from './routes/home/home.component'
import Navigation  from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'




function App() {
 const {currentUser} = useContext(UserContext);
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index  element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route 
      path='auth' 
      element={
      currentUser ? <Navigate to='/' replace /> : <Authentication />
      } 
      />

      </Route>
   </Routes>
  )
}

export default App


```

> main.jsx

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import { UserProvider } from './contexts/user.context'
import { ProductsProvider } from './contexts/products.context'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
       <ProductsProvider>
         <App />
       </ProductsProvider>  
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)

```

#### Product Card

> Inside components folder Create a new folder named 'product-card'

Add two new files inside it
##### 1. product-card.component.jsx
##### 2. product-card.styles.scss

> product-card.component.jsx

```
import './product-card.styles.scss'
import Button from '../button/button.component'

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;

 return(
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`} />
    <div className = 'footer'>
         <span className='name'>{name}</span>
         <span className='price'>${price}</span>
    </div>
    <Button buttonType='inverted'>Add to card</Button>
</div>
 )
}


export default ProductCard
```

> product-card.styles.scss

```
.product-card-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
  
    img {
      width: 100%;
      height: 95%;
      object-fit: cover;
      margin-bottom: 5px;
    }
  
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }
  
    .footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
  
      .name {
        width: 90%;
        margin-bottom: 15px;
      }
  
      .price {
        width: 10%;
      }
    }
  }
```




### Firebase Data Storage

#### addCollectionAndDocuments

Convert shop-data.json to shop-data.js

and paste this

```
const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

```
And here what you will see is that inside I have just some shop data that points to an array of objects which contain the title of the hats and then the items where you see a very similar pattern to what we had before. Except now we have numerous categories.
We have the sneakers, we have the jackets, we have the women's and we have the men'

> Inside products.context.jsx

change PRODUCTS to SHOP_DATA

Now change from this

```
import { createContext, useState } from 'react';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
```


What we need to do now is we need to go into FirebaseUtils with these utils.

What I'm going to do is I'm going to walk you through creating a method that allows us to upload these categories from that <b>SHOPDATA</b> up into the respective collections up in the store.

So to do this, we're going to need to bring in a couple of methods.

The first one that we need is we need the collection.

So collection actually is  from Firebase/firestore.Because Firestorm is what governs our database.

> firebase.utils.js

```
import {getFirestore, doc, getDoc, setDoc, collection} from 'firebase/firestore'
```

So we need both the collections method and we need the writeBatch method

```
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch} from 'firebase/firestore'
```

First, the collection method is the most important.
We need the collection method because it will actually allow us the same way when we were getting a document reference(userDocRef) to get a collection reference because we're trying to write to a brand new collection.

So here what I'm going to do is I am going to create a new function and I'm going to call it <b>addCollectionAndDocuments</b> because that's what we're doing.
We're adding in some new collection as well as the actual documents inside of that collection

So what I want to call this for my first variable that I'm going to pass in is the collection key. This is going to be that key that we saw inside of our cloud firestore DB.
So, for example, the collection has users as the key. We want one that has categories as the key.

```
export const addCollectionAndDocuments = (collectionKey) =>{

  }

```
So we're going to pass that as a string. But this is just what I'm calling a collection key.


then the next argument is going to be the actual documents that we want to add.
```
export const addCollectionAndDocuments = (collectionKey, objectsToAdd) =>{

  }

```
And this is our function


The other thing to remember is because we're adding to an external source, this is most likely going to be a bunch of async behavior because we're essentially calling out up onto an API in order to store data.

So this is async.

```
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{

  }

```

What we want to do now is I want to think about how it is that we actually create the collection, because right now it doesn't exist.

But as we learned with user document references, as long as we try and find something in the database,Firebase is actually going to create one for us, even if it's not populated, because that's what the document references in our particular case.

Now we're making a collection reference.

```
const collectionRef = collection(db,)
```
So here collection reference(coolectionRef) is equal to collection passing in our DB(db) because we're saying, hey, go with our <b>db</b> instance as we know we did with Auth.

This is exactly what we're doing with Firestore as well.

We have one DB Singleton instance and we're saying, Hey, get me the collection within the DB and within this DB.

What's specific collection key are you looking for?
Well, this is going to be the collection key that we pass in.

```
const collectionRef = collection(db, collectionKey)
```

So you can imagine that when we actually call this function(addCollectionAndDocuments), we're going to give it categories.

```
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey)
  }

```


So now that we have our collection reference, what we gonna do with it

Well, now what we have to do is we need to think about 
how to store each of these objects now insideof this new collection ref as a new document?
Now we are writing multiple different documents into a collection, So for us to do this, we need to actually think about this concept of transactions.

> A transaction is a word that represents a successful unit of work to a database.
Now a unit of work differs.It might be multiple sets of setting values into a collection. For us, we consider a successful write to this collection if all of the documents successfully wrote to that database.

This means that there are numerous writes involved in this one single transaction.
The single transaction being we stored all of the objects into this collection.

Just like real-world payment transaction(safe, secure without any network issue)
We want to make sure that all of our objects that we're trying to add to the collection are successfully added.

And to do that, we need to use a <b>batch</b>

So a batch is what we get from that <b>writeBatch</b> method that we also import it from Firestore.

So here, how to use it is we need to instantiate a batch class by saying, Hey, I want to make a batch and this batch is going to call writBatch.

<b>writeBatch</b> is going to return me a batch and we have to pass it the database(db) that we're trying to make this batch on.

```
const batch = writeBatch(db);
```

So as you've seen with this trend, we just always pass the database(db) to whatever these methods that we've imported are.

Now that I have this batch instance, what batch allows me to do is attach a bunch of different,
let's say, writes, deletes, sets, whatever.

We can attach all of those to the batch And only when we're ready to fire off the batch does the actual transaction begin.

So what we need to do is we need to create a bunch of set events because each of these objects were saying, Hey, I want you to create and set that object(objectsToAdd) into this collection(collectionRef) as a new document for me.
To do that,  we're going to say, Hey, objectsToAdd for each.So forEach of these objects, I want you to batch set for me.
```
objectsToAdd.forEach()
```

So here we're going to receive this object(obj) And if you remember, this object is inside of the SHOP_DATA.

It's each of these category objects here with the title and the items array. that's we are adding, qwell we have five different objects

So how we're going to do this is inside of Firebase Utils again with this object.
Now I first want to get the document reference.So to get the document reference, I'm going to make one called docref.
```
objectsToAdd.forEach((object) => {
  const docRef;
})
```

And this is equal to calling the doc method which we've done before when we got the userDocRef method

except in passing it. db I'm going to pass it the <b>collectionRef</b> because the collection ref actually tells directly this doc method which database we're using because we've got this collection ref from calling collection where the DB was already passed.

```
objectsToAdd.forEach((object) => {
  const docRef= doc(collectionRef)
})
```

So this doc is smart enough to know, Oh, you're giving me a collection ref?
Most likely you got it because you've already told that collection ref what dbit's from.

> collection(db, collectionKey)

So then with this collectionRef, what we also need to get this document is the title or the key.

What is the value? or The key value here, here these are actually the title on the object.

Now I'm going to say, hey, give me object, give me the title, but then lowercase it because right

```
objectsToAdd.forEach((object) => {
  const docRef= doc(collectionRef, object.title.toLowerCase());
})
```

Then what we want to do is we want to say, okay, I want you to batch set.On this document reference because as we know.
```
objectsToAdd.forEach((object) => {
  const docRef= doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef);
})
```
Firebase will give us back a document reference, even if it doesn't exist yet.
It will just point to that place for this specific key(object.title.toLowerCase()) inside of our collection(collectionRef).
And now what we're saying is, hey, set that location and set it with the value of the object itself.
You can pass it some JSON object and it will build out that structure for you and this is our entire batch.

```
objectsToAdd.forEach((object) => {
  const docRef= doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object);
})
```

Then what we need to do is we need to await actually firing off this batch because what happened is that we iterate(forEach) it over each individual object in the array.

We added an additional batch set call on there(batch.set(docRef, object);), creating a new document reference for each of those objects where the key is the title and the value is the object itself.

So now we say batch commit and this will begin firing it off.
```
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
      const docRef= doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')
  }
```


> Now inside products.context import this method addCollectionAndDocuments

And fire off once with useEffect

```
useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])
```

Once its uploaded to firestore remove the useEffect we dont need it anymore even remove the SHOP_DATA
except th method


### Get Products and Categories from Firestore

Now we already saved our data, now its time to fetch it and make use of it

Let's create another method to get the categories
 <b>getCategoriesAndDocuments</b>

Now inside, what we need to do is we need first the collection reference. So just like we got it before I'm going to say collection reference is equal to collection passing at the DB, but also the collection key.

 ```
 export const getCategoriesAndDocuments = async() =>{
    const collectionRef = collection(db,'categories');
  }

 ```
Here though we know exactly what the collection key is.

It's the categories key because we just made this collection.
What we need is we need to generate a query and from that query we need to get docs.

So we need to import two new methods from Firestore <b>Query</b> and <b>getDocs</b>

```
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'
```
But what we need to do with the query is we need to say, Hey, I'm going to generate a query off of

this <b>collectionRef</b>

So I'm going to use the query method by passing in the collectionRef.

```
const q = query(collectionRef);
```

This gives me some object now that I can get a snapshot from.
So I'm going to say query snapshot is equal to a weight of calling Get docs on Q So getDocs.
Here is the asynchronous ability to fetch those document snapshots that we want because now it's all
encapsulated under this query snapshot.
```
const querySnapshot = await getDocs(q);
```

From here, we're actually able to access the different document snapshots off of query snapshot docs.
This will give us an array of all of those individual documents inside, and the snapshots are the actual
data themselves, as we've seen before when we use snapshots.

But here what we want to do is we want to reduce over this to create this structure we've been discussing.
So here I'm going to say concept category map,
we're reducing over this array in order to finally end up with an object.
```
const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

```
So here for the actual structure of my reduce, my first argument of course, is the callback that gets
invoked on each document snapshot.
And then this is the final object we want to create. But this is the initial instance of it, which is an empty object because we're building out the map as we go.

The first argument is going to be accumulator(acc).

The second argument is going to be docSnapshot.

And then from here, what we're going to do is we are going to first need to structure off the values
of the data of this doc snapshot.

So I want the title and I want the items and I'm going to say, hey, take this doc snapshot, give
me the data, which will be the object, and then take off the title and the items.

Then what I'm going to do is I'm going to say the accumulator at the title value is also need to be
lowercase.

```
const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
```

If we remember our title is actually, as I mentioned, uppercase.
This value is going to be equal to the items and then I return my accumulator now that it's been updated.
So now what this will be is the actual category map that we've been building out And I'm just going to return this as is.

this is async and then we need to reduce over and yet somehow here on the docs we get like these documents snapshots.

> products.context.jsx Import this method

```
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
    };

    getCategoriesMap()
  }, [])
```


Change the file name 'products.context.jsx' to 'categories.context.jsx'

Also Change some code inside of it

> categories.context.jsx

```
import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
```

> shop.component.jsx

```
import { useContext, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
```

Now as you can see we can see every product of the categories but what if we want to the page should preview the first four categories or only show minimum preview

for that lets build a new component
create new folder <b>category-preview</b>
inside of it add two more files
create new file named <b>category-preview.components.jsx</b>
create new style file <b>category-preview.styles.jsx</b>

> category-preview.components.jsx

```
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
```

> category-preview.styles.jsx

```
.category-preview-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  
    .title {
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
    }
  
    .preview {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
    }
  }
```

also change the shop.component.jsx and import the category-preview

> shop.component.jsx
```
import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
```


### Nested Routes

we're going to do is we are going to create our nested routes.

We have this shop page already that we want as our base route.So we need to figure out how to set this up as its own component.And then we need to set up this nested route while accounting for in our current routing structure.

So the first thing we need to do in order to make this component of shop nest able with its roots is

> App.jsx
```
<Route path='shop' element={<Shop />} />
```

we need to say, okay, when you start matching this path, I know there will be a subsequent you are a parameter set after shop, whatever that set is. I don't care.

```
<Route path='shop/*' element={<Shop />} />
```

That's what this store represents.It's the wild card.
This just means that I want you to match shop / anything.

It doesn't matter. As long as you match that.
I want you to forward them and render this component the shop component, because now the shop component is going to have its own roots inside.
Now before we actually start implementing the routes, we need to duplicate this into the appropriate page component because now this shop component is going to be a collection preview.

So let's make a new route Folder.

And I want to call this my categories-preview because we're previewing multiple categories And similarly, of course, we'll need the categories.

add the new file <b>categories-preview.components</b>

And what we need to do now is we need to modify this.So instead of importing from shop, this is now categories-preview And this component will now be categories preview.

> categories-preview.components
```
import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
```

We still need the categories map because all of this functionality is still going to stay the same.

Except the only difference here is that instead of category preview container should be the name instead,of shop container.

So everything else though is the exact same.

We actually already had this component fully finished.

> shop.component.jsx

```
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
```
And let's bring this category's preview now into our shop component.
Now, what it primarily needs is nested routing.
So this means that we need to import in routes and routes.

The reason why is because you cannot use a route component unless its immediate parent is a route component

```
<Route index element={<CategoriesPreview />} />
```
Now what we're saying is that, hey, if you match shop, slash any wild card of whatever you are,
parameters that follow render the shop because inside of the shop you can expect further routes.
And these routes are all going to be relative to the parent route, which was shop/, whatever
is rendered inside as the parameter will be dealt with inside of this route.
So this is the benefit of nesting the code like so.


And this is true for any subsequent children routes that get nested, they're going to follow a similar
pattern.Right now we just have an index route, but in the next component, we're going to do a dynamic URL
parameter based route.
```
<Route index element={<CategoriesPreview />} />
```

#### Category Page




### Styled Component

> npm i styled-components

Today I learnt styled component, and guess what happens I found my answers about the questions arises from the the curious observations I had few months ago, Let me share it with you

If you are web developer, a beginner in it who tried to build a website, or even a non-tech guy , I'm sure you once visited any webapp like facebook,wikipedia, google or youtube and even clicked on the 'Inspect' button

but as a front-end developer, you mostly use inspect for DevTools or CSS styling and then you observed that the classNames of the HTML element are pretty weird f1wDDf or RRg9R8 , you must be thinking damn professional developers name their classname like this but why they do it and how I can do it.

Here is the answer with the help of Styled Component and the reason to do it is to get rid of style classing or css class-clashing


convert navigation.styled.scss to navigation.styles.jsx

> navigation.styles.jsx
```
import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavigationContainer =styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

`;

export const LogoContainer = styled(Link)`
height: 100%;
      width: 70px;
      padding: 25px;

`;

export const NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`;

export const NavLink = styled(Link)`
       padding: 10px 15px;
        cursor: pointer;

`;



```

> navigation.component.jsx

```
import { Fragment, useContext } from 'react';
import {Outlet, Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  }




  return(
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
        <p className='logo'>Logo</p> 
        </LogoContainer>
        <NavLinks>
         <NavLink to='/shop'>
            SHOP
         </NavLink>
         {currentUser ? (
            <NavLink as='span' onClick={signOutHandler}>
              {' '}
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;
```


### Button Styled-components

> button.styles.jsx
```
import styled from 'styled-components';

export const BaseButton = styled.button`
min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
`;

export const InvertedButton = styled(BaseButton)`
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`;


```

> button.components.jsx

```
import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]
)


const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;
```

> sign-in-form.components.jsx

```
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
```

> product-card.components.jsx

```
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product)
  };

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
```

### Cart-Dropdown Styled component

> cart-dropdown.styles.jsx
```
import styled from 'styled-components';

import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    font-size: small;
  }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;
```

> cart-dropdown.component.jsx

```
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ): (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
```

### Cart-Icon styled component

> cart-icon.styles.jsx

```
import styled from 'styled-components';


export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;

export const ShoppingIcon = styled.svg`
      width: 24px;
      height: 24px;
`;


export const ItemCount = styled.span`
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
      color: red;

`
```

> cart-icon.component.jsx

```
import { useContext } from 'react';


import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
      </ShoppingIcon>
      <cartCount>{cartCount}</cartCount>
      
    </CartIconContainer>
  );
};

export default CartIcon;
```


### Directory-item styled component

> directory-item.styles.jsx

```
import styled from 'styled-components';

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`}; 
`;

export const Body = styled.div`
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
      font-weight: normal;
      font-size: 16px;
    }

`;


export const DirectoryItemContainer = styled.div`
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

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }

    &:first-child {
    margin-right: 7.5px;
    }

    &:last-child {
    margin-left: 7.5px;
    }
  }
`;
```

> directory-item.component.jsx

```
import { Link } from 'react-router-dom';
import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <Link to={`shop/${title}`}><p>Shop Now</p></Link>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
```