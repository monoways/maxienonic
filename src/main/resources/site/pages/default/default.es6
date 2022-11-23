/** Simple page controller, as an example of how to render an XP page with Regions, using only server-side React.
 *
 *  NOTE:   Parts and layouts rendered with react4xp DO NOT need a page controller like this to work. Putting react4xp-
 *          rendered XP components inside regions in a thymeleaf-rendered page controller (or hardcoded, etc) is
 *          perfectly fine. This is just a demo of how to do it if you need to make the page controller in react4xp.
 */

const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

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
                        <base href="${portal.assetUrl({path: ''})}" />
                        <link type="text/css" href="${portal.assetUrl({path: 'css/default.css'})}" />
                    </head>
                    <body class="xp-page">
                    <header style="display:flex; flex-direction:row; justify-content:space-around; align-items: center;" class="xp-header">
                        <div class="xp-logo">
                            <div class="kulboks">Selfi.no</div>
                        </div>
                        <div class="xp-menu menu-items">
                            <a href="#"><p class="menu-item">Hjem</p></a>
                            <a href="#"><p class="menu-item">Brukere</p></a>
                            <a href="#"><p class="menu-item">Hjelpere</p></a>
                        </div>
                    </header>
                        <div id="${id}"></div>
                        <footer class="footerContainer">
                        <div class="footer-section">
                            <div class="footer-logo">
                                <div style="background-color: black; width: 100px; height: 50px; padding: 1em; margin: 1em 0; color: aliceblue;" class="kulboks">Selfi.no</div>
                            </div>
                            <div class="footer-contact">
                                <p>Selfi.no</p>
                                <p>Telefon: 12345678</p>
                                <p>E-post:
                                    <a href="mailto:maxi@ways.no">
                                      maxi@ways.no
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="footer-section">
                            <div class="footer-menu">
                              <h2 class="footer-menu-header">Hjelp</h2>
                                <p>Meny</p>
                                <p>Hjem</p>
                                <p>Brukere</p>
                                <p>Hjelpere</p>
                            </div>
                        </div>
                        <div class="footer-section">
                            <div class="footer-menu">
                              <h2 class="footer-menu-header">Om oss</h2>
                                <p>Meny</p>
                                <p>Hjem</p>
                                <p>Brukere</p>
                                <p>Hjelpere</p>
                            </div>
                        </div>
                    </footer>
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
