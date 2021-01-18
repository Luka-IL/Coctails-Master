import IngredientGroup from "../ingredient-group/ingredient-group"
import {ingredients} from "../../mock"
import {alcoholFilter, notAlcoholFilter} from "../../utils"

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">SHAKER</h2>
      <div className="place-mixology row">
        <div className="col s4 ingredient">
          <h3 className="place-mixology__title ingredient__title">Alcohol</h3>
          <ul className="ingredient-list">
            {alcoholFilter(ingredients).map((item, id) => {
              return (
                <IngredientGroup
                  key={id}
                  ingredient={item}
                  id={id}
                />
              )
            }
            )}
          </ul>
        </div>
        <div className="col s4">
          <svg className="shaker" xmlns="http://www.w3.org/2000/svg" width="512" height="512">
            <path d="M212 70C206.658 70.4222 200.936 71.1585 196 73.3488C169.51 85.1035 166.458 115.464 148.815 134.985C146.391 137.666 143.654 140.105 140 140.772C134.212 141.827 126.501 139.715 124.073 147.019C121.13 155.869 132.076 157.497 133.405 165.004C137.051 185.588 137.606 207.192 139.834 228C146.948 294.45 154.662 360.772 163.87 427C166.238 444.033 168.98 461.029 171.754 478C173.212 486.921 173.881 496.911 180.213 503.957C189.804 514.629 205.123 512 218 512C249.964 512 282.049 512.822 314 511.985C329.807 511.572 336.758 498.918 339.08 485C344.24 454.075 348.744 423.06 353 392C361.337 331.155 368.062 270.078 374.169 209C375.646 194.226 375.15 177.384 378.978 163.044C380.75 156.41 390.873 155.879 387.927 147.019C385.33 139.206 376.959 142.196 371 140.566C367.038 139.483 363.97 136.137 361.529 132.999C346.015 113.063 340.934 83.3037 315 72.9298C310.327 71.0604 304.988 70.3942 300 70L300 42C300 33.2208 300.162 24.8293 295.525 17C286.188 1.23657 271.503 0 255 0C240.043 0 226.894 1.4938 217.75 15.0038C207.743 29.7884 212 52.985 212 70z" />
          </svg>
        </div>
        <div className="ingredient col s4">
          <h3 className="place-mixology__title ingredient__title">Not Alcohol</h3>
          <ul className="ingredient-list">
            {notAlcoholFilter(ingredients).map((item, id) => {
              return (
                <IngredientGroup
                  key={id}
                  ingredient={item}
                  id={id}
                />
              )
            }
            )}
          </ul>
        </div>
      </div>
    </main>
  )
}
export default Main;