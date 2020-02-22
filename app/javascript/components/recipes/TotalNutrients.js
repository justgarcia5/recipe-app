import React from "react";

const TotalNutrients = props => {
  return (
    <div className="total-nutrients">
      <h2>Total Nutrients</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.ENERC_KCAL.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              {props.recipe.totalNutrients.ENERC_KCAL.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FAT.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FAT.quantity)}{" "}
              {props.recipe.totalNutrients.FAT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FASAT.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FASAT.quantity)}{" "}
              {props.recipe.totalNutrients.FASAT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FAMS.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FAMS.quantity)}{" "}
              {props.recipe.totalNutrients.FAMS.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FAPU.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FAPU.quantity)}{" "}
              {props.recipe.totalNutrients.FAPU.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.CHOCDF.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.CHOCDF.quantity)}{" "}
              {props.recipe.totalNutrients.CHOCDF.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FIBTG.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FIBTG.quantity)}{" "}
              {props.recipe.totalNutrients.FIBTG.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.SUGAR.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.SUGAR.quantity)}{" "}
              {props.recipe.totalNutrients.SUGAR.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.PROCNT.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.PROCNT.quantity)}{" "}
              {props.recipe.totalNutrients.PROCNT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.NA.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.NA.quantity)}{" "}
              {props.recipe.totalNutrients.NA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.CA.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.CA.quantity)}{" "}
              {props.recipe.totalNutrients.CA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.MG.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.MG.quantity)}{" "}
              {props.recipe.totalNutrients.MG.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.K.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.K.quantity)}{" "}
              {props.recipe.totalNutrients.K.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FE.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FE.quantity)}{" "}
              {props.recipe.totalNutrients.FE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.ZN.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.ZN.quantity)}{" "}
              {props.recipe.totalNutrients.ZN.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.P.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.P.quantity)}{" "}
              {props.recipe.totalNutrients.P.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.VITA_RAE.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.VITA_RAE.quantity)}{" "}
              {props.recipe.totalNutrients.VITA_RAE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.VITC.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.VITC.quantity)}{" "}
              {props.recipe.totalNutrients.VITC.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.THIA.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.SUGAR.quantity)}{" "}
              {props.recipe.totalNutrients.SUGAR.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.RIBF.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.RIBF.quantity)}{" "}
              {props.recipe.totalNutrients.RIBF.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.NIA.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.NIA.quantity)}{" "}
              {props.recipe.totalNutrients.NIA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.VITB6A.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.VITB6A.quantity)}{" "}
              {props.recipe.totalNutrients.VITB6A.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FOLDFE.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FOLDFE.quantity)}{" "}
              {props.recipe.totalNutrients.FOLDFE.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.FOLFD.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.FOLFD.quantity)}{" "}
              {props.recipe.totalNutrients.FOLFD.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.TOCPHA.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.TOCPHA.quantity)}{" "}
              {props.recipe.totalNutrients.TOCPHA.unit}
            </td>
          </tr>
          <tr>
            <td>
              <b>{props.recipe.totalNutrients.VITK1.label}</b>{" "}
              {Math.floor(props.recipe.totalNutrients.VITK1.quantity)}{" "}
              {props.recipe.totalNutrients.VITK1.unit}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TotalNutrients;
