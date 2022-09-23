# React Search Query

_A iightweight library for working qith search queries in react_

React search query allows you to get the search params in the URL with a single line of code.

## Installation

React-search-query requires a window to run. If you're using a Next application, wrap the method in useEffect.

```sh
yarn add react-search-query
yarn start

npm install react-search query
npm start
```

## Usage

To use react-search-query in a react application, import the package and initialise:

```sh
import { Query } from "react-search-query"

const App = () => {
    const query = Query()
    console.log(query)
}
```

To use react-search-query in a next application, import the package and intiailise in useEffect:

```sh
import { Query } from "react-search-query"
import { useState, useEffect } from "react"

const App = () => {
    const [state, setState] = useState({})

    useEffect(() => {
        const query = Query()
        setState(query)
    }, [])

    console.log(state)
}
```

## Repository

Check out the public repository [here](https://github.com/thealphameil/react-search-query)
