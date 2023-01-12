const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {

    const component = portal.getComponent();

    const props = {
        title: component.config.title,
        text: component.config.text, 
        link: component.config.link,
    };

    return React4xp.render(
        component,
        props,
        request,
        {                               
            clientRender: true,         
        });
};