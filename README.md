#Meta-mars tech-store

installation - npm init vite

App Name - Meta-mars

choose 'react' framework

after that in terminal
> npm install
>npm run dev

Lets Build our React E-Commerce App

1. We gonna build categories with 5 different cards(Gaming, music, merch, Drone, VR headset) and each card is container in itself(inside of it is image and another div with another text element inside it )

# I'll create a div with classname= 'categories-container' because that pretty much it is 

# Inside it we create five different divs that have className='category-container', also this category container will contain all the content inside of it as follows:

## <img>
## div with className = 'category-body-container'
inside this body-container we will add some more elements
### <h2>Hats</h2>
### <p>Shop Now</p>

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