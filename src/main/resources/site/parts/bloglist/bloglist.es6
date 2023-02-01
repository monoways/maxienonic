const portal = require('/lib/xp/portal');
const React4xp = require('/lib/enonic/react4xp');

const guillotine = require('/headless/guillotineApi');
const { buildQueryListBlogposts, buildParentPathQuery, extractBlogpostArray } = require('/headless/helpers/blogpostsRequest');

exports.get = function(request) {
    const content = portal.getContent();
    const component = portal.getComponent();

    const query = buildQueryListBlogposts();

    const variables = {
        first: 10,
        offset: 0,
        sort: "data.publishDate DESC",
        parentPath: buildParentPathQuery(content._path)
    };

    const guillotineResult = guillotine.executeQuery(query, variables);

    const posts = extractBlogpostArray(guillotineResult);

    return React4xp.render(
        component,
        {
            posts: posts,
            apiUrl: `./${portal.getSite()._path}/api/headless`,
            parentPath: content._path,
            postCount: variables.first,
            sortExpression: variables.sort
        },
        request
    );
};