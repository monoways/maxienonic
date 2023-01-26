import react from "react";

const portal = require("/lib/xp/portal");
const react4xp = require("/lib/enonic/react4xp");

exports.get = function (req) {
    const content = portal.getContent();

    const id = content._id;

    const props = {
        title: content.displayName,
        preface: content.data.preface,
        text: content.data.text,
        image: content.data.image ? portal.imageUrl({
            id: content.data.image,
            scale: 'width(800)'
        }) : '',
    };

    const output = react4xp.render(
        'Blogpost', 
        props, 
        req,
        {
            id, 

            body:
            `
                <html>
                    <head>
                        <meta charset='UTF-8' />
                        <title>{content.displayName}</title>
                    </head>
                    <body class='xp-page'>
                        <div id={id}></div>
                    </body>
                </html>
            `
        }
    );

    output.body = '<!DOCTYPE html>' + output.body;

    return output;
};


