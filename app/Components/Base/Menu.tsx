import GraphqlJson from '@/app/Components/GraphqlJson'
const Menu = async () => {
    const categoryData = await GraphqlJson({
        query: `
        {
  categoryList(
    filters: {
      parent_id: {in: ["2"]}
    }
  ) {
    children_count
    children {
      uid
      level
      name
      path
      url_path
      url_key
      children {
        uid
        level
        name
        path
        url_path
        url_key
      }
    }
  }
}
        `
    });
    console.log("=========================================")
    console.log("=========================================")
    console.log("=========================================")
        console.log(categoryData)
       // const categoryData = await category.json();
    // console.log(categoryData)
    return (
        <div>
            {
                categoryData.data.categoryList.map(category => console.log(category))
            }
            menu
        </div>
    )

}

export default Menu;
