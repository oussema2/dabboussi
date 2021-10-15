import createFormFieldConfig from "Services/utils/createFormFieldConfig";
import { maxLengthRule } from "Services/utils/Rules/maxLengthRule";
import { minLengthRule } from "Services/utils/Rules/minLengthRule";
import { requiredRule } from "Services/utils/Rules/reauiredRule";

export const addProductFormData = {
  nomProduit: {
    ...createFormFieldConfig("Nom Produit", "nomProduit", "text"),
    validationRules: [
      requiredRule("Nom Produit"),
      minLengthRule("Nom Produit", 6),
      maxLengthRule("Nom Produit", 20),
    ],
  },
  description: {
    ...createFormFieldConfig("Description Produit", "description", "textarea"),
    validationRules: [
      requiredRule("Description Produit"),
      minLengthRule("Description Produit", 20),
      maxLengthRule("Description Produit", 100),
    ],
  },
  quantitie: {
    ...createFormFieldConfig("Quantite Produit", "quantitie", "number"),
    validationRules: [requiredRule("Quantite Produit")],
  },
  prix: {
    ...createFormFieldConfig("Products Price", "prix", "number"),
    validationRules: [requiredRule("Products Price")],
  },
  imageProduct: {
    ...createFormFieldConfig("Product Image", "imageProduct", "file"),
    validationRules: [requiredRule("Product Image")],
  },
};
