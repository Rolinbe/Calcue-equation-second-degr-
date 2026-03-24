document.addEventListener("DOMContentLoaded", (evt) => {
  //recuperation des variables;
  const coef_a_Inp = document.getElementById("coef_a");
  const coef_b_Inp = document.getElementById("coef_b");
  const coef_c_Inp = document.getElementById("coef_c");
  const CalculeBtn = document.getElementById("calculatrice");

  const ErreurMessage = document.getElementById("error-wrapper");
  const SolutionMessage = document.getElementById("solution-wrapper");

  CalculeBtn.addEventListener("click", (evt) => {
    //On appel la fonction validateCoef
    const validation = validateCoef(
      coef_a_Inp.value,
      coef_b_Inp.value,
      coef_c_Inp.value,
    );
    ErreurMessage.style.display = validation ? "none" : "block";

    if (validation) {
      const delta = dicriminant(
        coef_a_Inp.value,
        coef_b_Inp.value,
        coef_c_Inp.value,
      );

      SolutionMessage.innerHTML = getSolution(delta);
      SolutionMessage.style.display = "block";
    }
  });

  const getSolution = (delta) => {
    solution = "";
    //on sait que 3cas de traitement pour le calcul de delta;
    //1er cas
    if (delta > 0) {
      const x1 = (-coef_b_Inp.value - Math.sqrt(delta)) / (2 * coef_a_Inp.value);
      const x2 = (-coef_b_Inp.value + Math.sqrt(delta)) / (2 * coef_a_Inp.value);
      solution += "DELTA > 0, alors l'eqaution admet deux solutions réelles";
      solution += `  X<sub>1</sub> = ${x1} et X<sub>2</sub> = ${x2} .`;
      return solution;
    }
    //2em cas;
    if (delta < 0) {
      return (solution = "DELTA < 0, Alors l'equation n'admet pas de solution réelle. ");
    }

    //3em cas;
    if (delta === 0) {
      const x0 = (-coef_b_Inp.value ) / (2 * coef_a_Inp.value);
      solution = "DELTA = 0, Alors la solution admet une solution réelles double .";
      return (solution += `X<sub>0</sub> = ${x0}`);
    }
  };
});

//creation de fonction vadidation des champs !
const validateCoef = (...args) => {
  for (coef of args) {
    if (isNaN(Number(coef))) {
      return false;
    }
  }
  return true;
};
//creation de fonction discriminant;
const dicriminant = (coef_a, coef_b, coef_c) => {
  const Delta = Math.pow(coef_b, 2) - 4 * coef_a * coef_c;
  return Delta;
};
