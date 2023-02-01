const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');
const menu = require('/lib/menu');

exports.get = function(request) {
    const content = portal.getContent();
    // const pageConfig = (content.page || {}).config || {};
    const entry = portal.getComponent();

    let menuItems = menu.getMenuTree(3);
    let breadcrumbItems = menu.getBreadcrumbMenu();

    const id = `react4xp_${content._id}`;                   

    const props = {
        regionsData: content.page.regions,
        // mainRegion: content.page.regions["main"],
        // headerRegion: content.page.regions["header"],
        names: ["header", "main"],
        // tag: "main",
        // backgroundColor: pageConfig.backgroundColor,
        menuItems: menuItems,
        breadcrumbItems: breadcrumbItems,
        path: content._path,
        content: content,
        blogContent: {
            title: content.displayName,
            preface: content.data.preface,
            text: content.data.bodyText,
            image: content.data.image ? portal.imageUrl({
                id: content.data.image,
                scale: 'width(500)'
            }) : '',
        },
    };

    const htmlBody = `
                <html>
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>${content.displayName}</title>
                        <base href="${portal.assetUrl({path: ''})}" />
                        <link type="text/css" href="${portal.assetUrl({path: 'css/default.css'})}" />
                    </head>
                    <body class="xp-page">
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