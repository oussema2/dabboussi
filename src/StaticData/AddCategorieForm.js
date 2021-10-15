import createFormFieldConfig from "Services/utils/createFormFieldConfig";
import { minLengthRule } from "Services/utils/Rules/minLengthRule";
import { requiredRule } from "Services/utils/Rules/reauiredRule";

export const addCategorieForm = {
  nomCategorie: {
    ...createFormFieldConfig("Nom Categorie", "nomCategorie", "text"),
    validationRules: [
      requiredRule("Nom Categorie"),
      minLengthRule("Nom Categorie", 2),
    ],
  },
  description: {
    ...createFormFieldConfig(
      "Description Categorie",
      "description",
      "textarea"
    ),
    validationRules: [
      requiredRule("Description Categorie"),
      minLengthRule("Description Categorie", 20),
    ],
  },
  icon: {
    ...createFormFieldConfig("Categorie Icon", "icon", "file"),
    validationRules: [requiredRule("Categorie Icon")],
  },
};
