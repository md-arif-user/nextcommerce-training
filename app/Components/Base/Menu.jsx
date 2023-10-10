import GraphqlJson from '@/app/Components/GraphqlJson'
// interface category {
//     children_count:string
//     children: any
// }
//
// interface children {
//     uid: string
//     level: string
//     name: string
//     path: string
//     url_path: string
//     url_key: string
// }
const CategoryComponent = ({categoryData}) => {
    console.log('-------------BEFORE RETURN---------')
    console.log(categoryData)
    if (!categoryData) return null;
    console.log('-------------After RETURN---------')
    console.log(categoryData)
    return categoryData.map((child) => {
        return (
            <div key={child.uid} style={{ marginLeft: 20 }}>
                <p>{child.name}</p>
                <CategoryComponent categoryData={child.children} />
            </div>
        );
    });

    // return (
    //     <>
    //         <div>
    //             {/*<h4>FF{categoryData.name}</h4></div>*/}
    //
    //         //     {categoryData.map(childrenCategory => {
    //                 // console.log('----------Print a menu--------')
    //                 return (<p key={childrenCategory.uid}>{childrenCategory.name}</p>)
    //         })}
    //         <CategoryComponent categoryData={categoryData.children} />
    //     </>
    // );
}



const Menu = async () => {
    // const categoryData: category[] = await GraphqlJson({
    const categoryData = await GraphqlJson({
        query: `
        {
  categoryList(
    filters: {
      parent_id: {in: ["1"]}
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
    }).then((res) => res.categoryList);
    console.log("=========================================")
    console.log("=========================================")
    console.log("=========================================")
    // console.log(categoryData)
    // const categoryData = await category.json();
    // console.log(categoryData)
    return (
        <>
            { categoryData.map(category => {
                    return (
                            <>
                                <h4>{category.children_count}</h4>
                                <CategoryComponent categoryData={category.children}/>
                            </>
                        )

                }
            )}

        </>
    )

}

export default Menu;
