// this loops through three levels of menu items and pushes them to the menuItemsArray to get a flat array of all menu items, 
  // it also adds a layer property to each item

const flattenMenuArray = (menuArray) => {
    const menuItemsArray = [];
    menuArray.forEach((item) => {
        item.layer = 0;
        menuItemsArray.push(item);
        if (item.hasChildren) {
            item.children.forEach((child) => {
                child.layer = 1;
                child.father = item.title;
                menuItemsArray.push(child);
                if (child.hasChildren) {
                    child.children.forEach((child2) => {
                        child2.father = child.title;
                        child2.layer = 2;
                        menuItemsArray.push(child2);
                    })
                }
            })
        }
    })
    return menuItemsArray;
}

export default flattenMenuArray;