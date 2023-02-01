const portal = require('/lib/xp/portal');
const react4xp = require('/lib/enonic/react4xp');

exports.get = function(request) {
    const content = portal.getContent(); 
    const entry = portal.getComponent(); 

    const id = `react4xp_${content._id}`;

    const props = {
        regionsData: content.page.regions,
        names: "main",
        tag: "main",
    };

    const htmlBody = `
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>${content.displayName}</title>
            <link href="../assets/css/theme.css" rel="stylesheet" />
        </head>
        <body class="xp-page">
            <header>
                <div style={{width:'100px', height:'50px', backgorundColor:'black'}}>
                </div>
            </header>
            <div id="${id}"></div>
        </body>
    </html>
    `;

    const output = React4xp.render(
    entry,
    props,
    null,
    {
    id,
    body: htmlBody//,
    //clientRender: true // Doesn't work for page
    }
    );



    // The unclosed !DOCTYPE tag is not XML-compliant, and causes an error if used in the body parameter of React4xp.render.options above.
    // Therefore, added here:
    output.body = '<!DOCTYPE html>' + output.body;

    return output;
};