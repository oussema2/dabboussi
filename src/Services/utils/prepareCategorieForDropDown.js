export const prepareCategorieForDropdown = (categories) => {
  const res = [];
  for (let i = 0; i < categories?.length; i++) {
    res.push({
      id: categories[i]?.id,
      path: "/0/" + categories[i]?.id,
      title: categories[i]?.nom,
    });
  }
  return res;
};
