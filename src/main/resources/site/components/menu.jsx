import react from "react";

export default (props) => {
    // check to see if hasChildren is true for any items in the menuItems array, and then check if hasChildren is true for any items in the children array
    // return a number based on how many layers of children there are
    // this doesnt work yet, only returns 1
    const layersOfChildren = props.menuItems.reduce((acc, item) => {
        if (item.hasChildren) {
            const children = item.children.reduce((acc, child) => {
                if (child.hasChildren) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            return acc + children;
        }
        return acc;
    }, 0);
    console.log(layersOfChildren, 'layersOfChildren in the menu, currently does not work');
    // if there are no layers of children, return a simple menu
    if (layersOfChildren === 0) {
        return (
            <ul className='menu-items'>
                {props.menuItems.map((item, index) => {
                    <li><a key={index} href={item.url}>{item.title}</a></li>
                })}
            </ul>
        );
    }

    // if there are layers of children, return a menu with dropdowns
    if (layersOfChildren === 1) {
        return (
            <nav className='nav'>
            <ul className='menu-items'>
                {props.menuItems.map((item, index) => {
                    return (
                        <div className='dropdown'>
                            <li><a href={item.url} className='dropdownbtn menu-item'>{item.title}</a></li>
                            <div className='dropdownContent'>
                                {item.children.map((child, index) => {
                                    return (
                                        <a key={`bottom-${index}`} href={child.url}>
                                            {child.title}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </ul>
        </nav>
        );
    }
    
    // return (
    //     props.menuItems.map((item, index) => {
    //         return item.hasChildren ? (
    //           <div className='dropdown'>
    //            <li><a href={item.url} className='dropdownbtn menu-item'>{item.title}</a></li>
    //             <div className='dropdownContent'>
    //               {item.children.map((child, index) => {
    //                 return (
    //                   <a key={`bottom-${index}`} href={child.url}>
    //                     {child.title}
    //                   </a>
    //                 );
    //               }
    //               )}
    //             </div>
    //           </div>
    //         ) : (
    //           <li><a key={`top-${index}`} href={item.url}>{item.title}</a></li>
    //         )
    //       })
    // )  
}