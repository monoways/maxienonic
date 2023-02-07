const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {

    const component = portal.getComponent();

    const props = {
        title: component.config.title,
        text: component.config.text, 
        link: component.config.link,
        visLink: component.config.visLink,
        logo: component.config.logo ? portal.imageUrl({
            id: component.config.logo,
            scale: 'width(220)'
        }) : '',
    };

    return React4xp.render(
        component,
        props,
        request,
        {                               
            // clientRender: true,         
        });
};