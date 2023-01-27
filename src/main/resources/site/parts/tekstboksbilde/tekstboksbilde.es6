const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {

    const component = portal.getComponent();

    const props = {
        title: component.config.title,
        text: component.config.text, 
        image: component.config.image ? portal.imageUrl({
            id: component.config.image,
            scale: 'width(800)'
        }) : '',
    };

    return React4xp.render(
        component,
        props,
        request,
        {                               
            clientRender: true,         
        });
};