const libs = {
    portal: require('/lib/xp/portal'),
    react4xp: require('/lib/enonic/react4xp')
  };
  
  exports.get = (req) => {
    const component = libs.portal.getComponent();
    // const content = libs.portal.getContent();

    const props = {
      regionsData: component.regions,
      // regionsData: content.page.regions,
      names: ['left', 'right'],
      maxWidth: parseInt(component.config.maxWidth, 10),
      border: component.config.border,
      leftBackgroundColor: component.config.leftBackgroundColor,
      rightBackgroundColor: component.config.rightBackgroundColor
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
  