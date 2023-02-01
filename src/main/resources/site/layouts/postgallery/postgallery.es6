const libs = {
    portal: require('/lib/xp/portal'),
    react4xp: require('/lib/enonic/react4xp')
  };
  
  exports.get = (req) => {
    const component = libs.portal.getComponent();

    const props = {
      regionsData: component.regions,
      names: ['main']
    };
  
    return libs.react4xp.render(
      component,
      props,
      {
        ...req
      },
      {}
    );
  };
  