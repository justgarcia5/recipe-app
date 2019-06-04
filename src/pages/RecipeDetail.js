import React from 'react';

const APP_KEY = 'b553d12844b50e38e7f0426de87800e2'
const APP_ID = '61f1760b'

class RecipeDetail extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount = () => {
    fetch(`https://api.edamam.com/search?q=${this.props.match.params.label}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then((data) => {
        let recipes = data.hits.map((hit) => hit.recipe)
        let filteredRecipes = recipes.filter((recipe, index) => index === 0)
        this.setState({ recipes: filteredRecipes })
      })
  }

  render() {
    return (
      <div className='recipe-detail'>
        {
          this.state.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <p className='recipe-detail-title' id='title'>{recipe.label}</p>
                <div className='detail-page-row-1'>
                  <img src={recipe.image} alt='recipe' className='recipe-detail-image' />
                  <div className='recipe-ingredients-list'>
                    <h2>Ingredients</h2>
                    {
                      recipe.ingredients.map((ingredient, index) => {
                        return (
                          <div key={index}>
                            <ul>
                              <li>{ingredient.text}</li>
                              <li className='recipe-ingredients-weight'>Weight: {Math.floor(ingredient.weight)} grams</li>
                            </ul>
                          </div>
                        )
                      })
                    }
                     <p className='recipe-source'>Source: <b>{recipe.source}</b></p>
                  </div>
                </div>

                <div className='recipe-detail-url'>
                  <p><b>Cooking Instructions:</b></p>
                  <i>
                    <a href={recipe.url} rel="noopener noreferrer" target="_blank">{recipe.url}</a>
                  </i>
                </div>
                <div className='recipe-health-labels-div'>
                  <h2>Health Labels</h2>
                  {
                    recipe.healthLabels.map((label, index) => {
                      return (
                        <div key={index}>
                          <ul>
                            <li className='recipe-health-labels'>{label}</li>
                          </ul>
                        </div>
                      )
                    })
                  }
                </div>
                <p>Total Calories {Math.floor(recipe.calories)}</p>
                <p>Total weight {Math.floor(recipe.totalWeight)} g</p>
                <p>Total time {recipe.totalTime}</p>
                <div>
                  <h2>Daily Nutrients</h2>
                  <p><b>{recipe.totalNutrients.ENERC_KCAL.label}</b> {Math.floor(recipe.totalNutrients.ENERC_KCAL.quantity)} {recipe.totalNutrients.ENERC_KCAL.unit}</p>
                  <p><b>{recipe.totalDaily.FAT.label}</b> {Math.floor(recipe.totalDaily.FAT.quantity)} {recipe.totalDaily.FAT.unit}</p>
                  <p><b>{recipe.totalDaily.FASAT.label}</b> {Math.floor(recipe.totalDaily.FASAT.quantity)} {recipe.totalDaily.FASAT.unit}</p>
                  <p><b>{recipe.totalDaily.CHOCDF.label}</b> {Math.floor(recipe.totalDaily.CHOCDF.quantity)} {recipe.totalDaily.CHOCDF.unit}</p>
                  <p><b>{recipe.totalDaily.FIBTG.label}</b> {Math.floor(recipe.totalDaily.FIBTG.quantity)} {recipe.totalDaily.FIBTG.unit}</p>
                  <p><b>{recipe.totalDaily.PROCNT.label}</b> {Math.floor(recipe.totalDaily.PROCNT.quantity)} {recipe.totalDaily.PROCNT.unit}</p>
                  <p><b>{recipe.totalDaily.NA.label}</b> {Math.floor(recipe.totalDaily.NA.quantity)} {recipe.totalDaily.NA.unit}</p>
                  <p><b>{recipe.totalDaily.CA.label}</b> {Math.floor(recipe.totalDaily.CA.quantity)} {recipe.totalDaily.CA.unit}</p>
                  <p><b>{recipe.totalDaily.MG.label}</b> {Math.floor(recipe.totalDaily.MG.quantity)} {recipe.totalDaily.MG.unit}</p>
                  <p><b>{recipe.totalDaily.K.label}</b> {Math.floor(recipe.totalDaily.K.quantity)} {recipe.totalDaily.K.unit}</p>
                  <p><b>{recipe.totalDaily.FE.label}</b> {Math.floor(recipe.totalDaily.FE.quantity)} {recipe.totalDaily.FE.unit}</p>
                  <p><b>{recipe.totalDaily.ZN.label}</b> {Math.floor(recipe.totalDaily.ZN.quantity)} {recipe.totalDaily.ZN.unit}</p>
                  <p><b>{recipe.totalDaily.P.label}</b> {Math.floor(recipe.totalDaily.P.quantity)} {recipe.totalDaily.P.unit}</p>
                  <p><b>{recipe.totalDaily.VITA_RAE.label}</b> {Math.floor(recipe.totalDaily.VITA_RAE.quantity)} {recipe.totalDaily.VITA_RAE.unit}</p>
                  <p><b>{recipe.totalDaily.VITC.label}</b> {Math.floor(recipe.totalDaily.VITC.quantity)} {recipe.totalDaily.VITC.unit}</p>
                  <p><b>{recipe.totalDaily.RIBF.label}</b> {Math.floor(recipe.totalDaily.RIBF.quantity)} {recipe.totalDaily.RIBF.unit}</p>
                  <p><b>{recipe.totalDaily.NIA.label}</b> {Math.floor(recipe.totalDaily.NIA.quantity)} {recipe.totalDaily.NIA.unit}</p>
                  <p><b>{recipe.totalDaily.VITB6A.label}</b> {Math.floor(recipe.totalDaily.VITB6A.quantity)} {recipe.totalDaily.VITB6A.unit}</p>
                  <p><b>{recipe.totalDaily.FOLDFE.label}</b> {Math.floor(recipe.totalDaily.FOLDFE.quantity)} {recipe.totalDaily.FOLDFE.unit}</p>
                  <p><b>{recipe.totalDaily.TOCPHA.label}</b> {Math.floor(recipe.totalDaily.TOCPHA.quantity)} {recipe.totalDaily.TOCPHA.unit}</p>
                  <p><b>{recipe.totalDaily.VITK1.label}</b> {Math.floor(recipe.totalDaily.VITK1.quantity)} {recipe.totalDaily.VITK1.unit}</p>
                  <p></p>
                </div>
                <div>
                  <h2>Total Nutrients</h2>
                  <p><b>{recipe.totalNutrients.FAT.label}</b> {Math.floor(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit}</p>
                  <p><b>{recipe.totalNutrients.FASAT.label}</b> {Math.floor(recipe.totalNutrients.FASAT.quantity)} {recipe.totalNutrients.FASAT.unit}</p>
                  <p><b>{recipe.totalNutrients.FAMS.label}</b> {Math.floor(recipe.totalNutrients.FAMS.quantity)} {recipe.totalNutrients.FAMS.unit}</p>
                  <p><b>{recipe.totalNutrients.FAPU.label}</b> {Math.floor(recipe.totalNutrients.FAPU.quantity)} {recipe.totalNutrients.FAPU.unit}</p>
                  <p><b>{recipe.totalNutrients.CHOCDF.label}</b> {Math.floor(recipe.totalNutrients.CHOCDF.quantity)} {recipe.totalNutrients.CHOCDF.unit}</p>
                  <p><b>{recipe.totalNutrients.FIBTG.label}</b> {Math.floor(recipe.totalNutrients.FIBTG.quantity)} {recipe.totalNutrients.FIBTG.unit}</p>
                  <p><b>{recipe.totalNutrients.SUGAR.label}</b> {Math.floor(recipe.totalNutrients.SUGAR.quantity)} {recipe.totalNutrients.SUGAR.unit}</p>
                  <p><b>{recipe.totalNutrients.PROCNT.label}</b> {Math.floor(recipe.totalNutrients.PROCNT.quantity)} {recipe.totalNutrients.PROCNT.unit}</p>
                  <p><b>{recipe.totalNutrients.NA.label}</b> {Math.floor(recipe.totalNutrients.NA.quantity)} {recipe.totalNutrients.NA.unit}</p>
                  <p><b>{recipe.totalNutrients.CA.label}</b> {Math.floor(recipe.totalNutrients.CA.quantity)} {recipe.totalNutrients.CA.unit}</p>
                  <p><b>{recipe.totalNutrients.MG.label}</b> {Math.floor(recipe.totalNutrients.MG.quantity)} {recipe.totalNutrients.MG.unit}</p>
                  <p><b>{recipe.totalNutrients.K.label}</b> {Math.floor(recipe.totalNutrients.K.quantity)} {recipe.totalNutrients.K.unit}</p>
                  <p><b>{recipe.totalNutrients.FE.label}</b> {Math.floor(recipe.totalNutrients.FE.quantity)} {recipe.totalNutrients.FE.unit}</p>
                  <p><b>{recipe.totalNutrients.ZN.label}</b> {Math.floor(recipe.totalNutrients.ZN.quantity)} {recipe.totalNutrients.ZN.unit}</p>
                  <p><b>{recipe.totalNutrients.P.label}</b> {Math.floor(recipe.totalNutrients.P.quantity)} {recipe.totalNutrients.P.unit}</p>
                  <p><b>{recipe.totalNutrients.VITA_RAE.label}</b> {Math.floor(recipe.totalNutrients.VITA_RAE.quantity)} {recipe.totalNutrients.VITA_RAE.unit}</p>
                  <p><b>{recipe.totalNutrients.VITC.label}</b> {Math.floor(recipe.totalNutrients.VITC.quantity)} {recipe.totalNutrients.VITC.unit}</p>
                  <p><b>{recipe.totalNutrients.THIA.label}</b> {Math.floor(recipe.totalNutrients.SUGAR.quantity)} {recipe.totalNutrients.SUGAR.unit}</p>
                  <p><b>{recipe.totalNutrients.RIBF.label}</b> {Math.floor(recipe.totalNutrients.RIBF.quantity)} {recipe.totalNutrients.RIBF.unit}</p>
                  <p><b>{recipe.totalNutrients.NIA.label}</b> {Math.floor(recipe.totalNutrients.NIA.quantity)} {recipe.totalNutrients.NIA.unit}</p>
                  <p><b>{recipe.totalNutrients.VITB6A.label}</b> {Math.floor(recipe.totalNutrients.VITB6A.quantity)} {recipe.totalNutrients.VITB6A.unit}</p>
                  <p><b>{recipe.totalNutrients.FOLDFE.label}</b> {Math.floor(recipe.totalNutrients.FOLDFE.quantity)} {recipe.totalNutrients.FOLDFE.unit}</p>
                  <p><b>{recipe.totalNutrients.FOLFD.label}</b> {Math.floor(recipe.totalNutrients.FOLFD.quantity)} {recipe.totalNutrients.FOLFD.unit}</p>
                  <p><b>{recipe.totalNutrients.TOCPHA.label}</b> {Math.floor(recipe.totalNutrients.TOCPHA.quantity)} {recipe.totalNutrients.TOCPHA.unit}</p>
                  <p><b>{recipe.totalNutrients.VITK1.label}</b> {Math.floor(recipe.totalNutrients.VITK1.quantity)} {recipe.totalNutrients.VITK1.unit}</p>
                  <p></p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default RecipeDetail;
