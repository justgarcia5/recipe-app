import React from "react";

const DailyNutrients = props => {
  return (
    <div className="daily-nutrients">
      <h2>Daily Nutrients</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.ENERC_KCAL.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.ENERC_KCAL.quantity)}{" "}
              {props.recipe.totalDaily.ENERC_KCAL.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.FAT.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.FAT.quantity)}{" "}
              {props.recipe.totalDaily.FAT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.FASAT.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.FASAT.quantity)}{" "}
              {props.recipe.totalDaily.FASAT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.CHOCDF.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.CHOCDF.quantity)}{" "}
              {props.recipe.totalDaily.CHOCDF.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.FIBTG.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.FIBTG.quantity)}{" "}
              {props.recipe.totalDaily.FIBTG.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.PROCNT.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.PROCNT.quantity)}{" "}
              {props.recipe.totalDaily.PROCNT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.NA.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.NA.quantity)}{" "}
              {props.recipe.totalDaily.NA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.CA.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.CA.quantity)}{" "}
              {props.recipe.totalDaily.CA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.MG.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.MG.quantity)}{" "}
              {props.recipe.totalDaily.MG.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.K.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.K.quantity)}{" "}
              {props.recipe.totalDaily.K.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.FE.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.FE.quantity)}{" "}
              {props.recipe.totalDaily.FE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.ZN.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.ZN.quantity)}{" "}
              {props.recipe.totalDaily.ZN.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.P.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.P.quantity)}{" "}
              {props.recipe.totalDaily.P.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.VITA_RAE.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.VITA_RAE.quantity)}{" "}
              {props.recipe.totalDaily.VITA_RAE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.VITC.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.VITC.quantity)}{" "}
              {props.recipe.totalDaily.VITC.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.RIBF.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.RIBF.quantity)}{" "}
              {props.recipe.totalDaily.RIBF.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.NIA.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.NIA.quantity)}{" "}
              {props.recipe.totalDaily.NIA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.VITB6A.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.VITB6A.quantity)}{" "}
              {props.recipe.totalDaily.VITB6A.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.FOLDFE.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.FOLDFE.quantity)}{" "}
              {props.recipe.totalDaily.FOLDFE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.TOCPHA.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.TOCPHA.quantity)}{" "}
              {props.recipe.totalDaily.TOCPHA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalDaily.VITK1.label}</b>{" "}
              {Math.floor(props.recipe.totalDaily.VITK1.quantity)}{" "}
              {props.recipe.totalDaily.VITK1.unit}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyNutrients;
