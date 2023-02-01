const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {

    const component = portal.getComponent();

    const props = {
        title: component.config.title,
        text: component.config.text, 
        imagePosition: component.config.imagePosition,
        button: component.config.button,
        buttonLink: component.config.buttonLink,
        buttonText: component.config.buttonText,
        buttonLink2: component.config.buttonLink2,
        buttonText2: component.config.buttonText2, 
        image: component.config.image ? portal.imageUrl({
            id: component.config.image,
            scale: 'square(500)'
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