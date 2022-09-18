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