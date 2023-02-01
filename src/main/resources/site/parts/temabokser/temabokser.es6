const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');
const menu = require('/lib/menu');


exports.get = function(request) {

    const component = portal.getComponent();

    let menuItems = menu.getMenuTree(3);

 

    const props = {
        title: component.config.title,
        text: component.config.text, 
        menuItems: menuItems,
    };

    return React4xp.render(
        component,
        props,
        request,
        {                               
            clientRender: true,         
        });
};