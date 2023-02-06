const libs = {
  portal: require('/lib/xp/portal'),
  react4xp: require('/lib/enonic/react4xp')
};

exports.get = (req) => {
  const component = libs.portal.getComponent();

  const props = {
    regionsData: component.regions,
    backgroundColor: component.config.backgroundColor,
    maxWidth: `${parseInt(component.config.maxWidth, 10)}%`,
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
