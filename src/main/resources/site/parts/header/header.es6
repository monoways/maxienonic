const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');
const menu = require('/lib/menu');


exports.get = function(request) {

    const component = portal.getComponent();
    const content = portal.getContent();
    const pageConfig = (content.page || {}).config || {};


    let menuItems = menu.getMenuTree(3);

    const props = {
        menuItems: menuItems,
        backgroundColor: pageConfig.backgroundColor,
        content: content,
    };

    return React4xp.render(
        component,
        props,
        request,
        {                               
            clientRender: true, 
            // body: `
            //     <header>

            //     </header>
            // `        
            // pageContributions: {        
            //     bodyEnd: `<script>console.log("The color of the thing is: ${component.config.color}");</script>`
            // }
        });
};