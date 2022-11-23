const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {

    const component = portal.getComponent();

    // const props = { color: component.config.color };

    return React4xp.render(
        component,
        // props,
        request,
        {                               
            clientRender: false, 
            body: `
                <header>

                </header>
            `        
            // pageContributions: {        
            //     bodyEnd: `<script>console.log("The color of the thing is: ${component.config.color}");</script>`
            // }
        });
};