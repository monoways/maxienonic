/** Simple page controller, as an example of how to render an XP page with Regions, using only server-side React.
 *
 *  NOTE:   Parts and layouts rendered with react4xp DO NOT need a page controller like this to work. Putting react4xp-
 *          rendered XP components inside regions in a thymeleaf-rendered page controller (or hardcoded, etc) is
 *          perfectly fine. This is just a demo of how to do it if you need to make the page controller in react4xp.
 */

const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');
const menu = require('/lib/menu');

exports.get = function(request) {
    const content = portal.getContent();
    const pageConfig = (content.page || {}).config || {};
    const entry = portal.getComponent();

    let menuItems = menu.getMenuTree(3);
    let breadcrumbItems = menu.getBreadcrumbMenu();
    // const getMenuProps = () => ({
    //     menuItems: menuLib.getMenuTree(3).menuItems || [], 
    // });
    // console.log("getMenuProps", getMenuProps(), 'dette er fra default.es6');
    // console.log(menuLib.getMenuTree(3).menuItems, 'dette er fra default.es6');

    const id = `react4xp_${content._id}`;                   

    const props = {
        regionsData: content.page.regions,
        // mainRegion: content.page.regions["main"],
        // headerRegion: content.page.regions["header"],
        names: ["header", "main"],
        // tag: "main",
        backgroundColor: pageConfig.backgroundColor,
        menuItems: menuItems,
        breadcrumbItems: breadcrumbItems,
        content: content,
    };

    const htmlBody = `
                <html>
                    <head>
                        <meta charset="UTF-8" />
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
