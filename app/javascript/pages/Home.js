import React, { useEffect, useState } from 'react'

import Errors from '../components/Errors'
import RecipeCards from '../components/recipes/RecipeCards';

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

const Home = props => {
  const [data, setData] = useState([])
  const [popular, setPopular] = useState([])
  const [responseOk, setResponseOk] = useState(false)
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=top&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(data => {
        let popularRecipes = data.hits.map((hit) => hit.recipe)
        setPopular(popularRecipes)
      });
  }, []);

  const handleQuery = (e) => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(data => {
        setData(data)
        setResponseOk(true)
        setQuery('')
      })
      .catch(errors => {
        setErrors(errors)
        setResponseOk(false)
      })
  }

  return (
    <div className='recipe-input'>

      <div className="container">
        <br/>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form onSubmit={handleQuery}>
              <div className="card-body row no-gutters align-items-center">
                <div className='search-icon'>
                  <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                  <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search recipes" onChange={event => setQuery(event.target.value)}/>
                </div>
                <div className="col-auto"  style={{padding: '10px'}}>
                  <button className="btn btn-sm btn-success" type="submit">search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
      <Errors
        errors={errors}
      />
      </div>
      <div>
        {!responseOk &&
          <h2 className='search-result-q'>Popular Recipes</h2>
        }
      </div>
      <div>
        {responseOk &&
          <h2 className='search-result-q'>Results for {data.q}...</h2>
        }
      </div>
      <RecipeCards
        response={responseOk}
        data={data}
        popular={popular}
        {...props}
      />
    </div>
  )
}


export default Home;
