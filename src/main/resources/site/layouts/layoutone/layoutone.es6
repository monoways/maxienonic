const libs = {
    portal: require('/lib/xp/portal'),
    react4xp: require('/lib/enonic/react4xp')
  };
  
  exports.get = (req) => {
    const component = libs.portal.getComponent();

    return libs.react4xp.render(
      component,
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
  