import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((singleCategory) => (
        <CategoryItem key={singleCategory.id} category={singleCategory} />
      ))}
    </div>
  );
};

export default Directory;
