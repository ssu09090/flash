
const Category = ({ cardData,onSelected }) => {
  return (
    <div className="category">
      <h1>학습카테고리</h1>
      <div className="category-wrap">
        {
          cardData.map((item)=>{
            return <button key={item.id} onClick={()=>{onSelected(item)}}>{item.name}</button>
          })
        }
      </div>
    </div>
  );
};

export default Category;
