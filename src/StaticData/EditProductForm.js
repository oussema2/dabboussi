import createFormFieldConfig from "Services/utils/createFormFieldConfig";
import { maxLengthRule } from "Services/utils/Rules/maxLengthRule";
import { minLengthRule } from "Services/utils/Rules/minLengthRule";
import { requiredRule } from "Services/utils/Rules/reauiredRule";

export const EditProductForm = {
  nomProduit: {
    ...createFormFieldConfig("Nom Product", "nomProduit", "text"),
    validationRules: [
      requiredRule("Nom Produit"),
      minLengthRule("Nom Produit", 6),
      maxLengthRule("Nom Produit", 20),
    ],
  },
  description: {
    ...createFormFieldConfig("Description Product", "description", "textarea"),
    validationRules: [
      requiredRule("Description Produit"),
      minLengthRule("Description Produit", 20),
      maxLengthRule("Description Produit", 100),
    ],
  },
  quantitie: {
    ...createFormFieldConfig("Quantite Product", "quantitie", "number"),
    validationRules: [requiredRule("Quantite Produit")],
  },
  prix: {
    ...createFormFieldConfig("Product Price", "prix", "number"),
    validationRules: [requiredRule("Products Price")],
  },
};
