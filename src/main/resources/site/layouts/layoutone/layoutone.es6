const libs = {
    portal: require('/lib/xp/portal'),
    react4xp: require('/lib/enonic/react4xp')
  };
  
  exports.get = (req) => {
    const component = libs.portal.getComponent();
  
    return libs.react4xp.render(
      'site/layouts/layout-1-col/layout-1-col',
      {
        regionsData: component.regions,
        names: 'layout1'
      },
      {
        ...req
      },
      {}
    );
  };
  