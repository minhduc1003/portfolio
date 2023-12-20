import { ICategories } from "../experience";

const Category = ({ cate }: { cate: any }) => {
  return <div className="category">{cate.name}</div>;
};

export default Category;
