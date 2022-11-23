var libs = {
    portal: require("/lib/xp/portal"),
    React4xp: require('/lib/enonic/react4xp'),
    // thymeleaf: require("/lib/thymeleaf"),
    bootstrapLayout: require("/lib/enonic/bootstrap-layout"),
  };
  
  // Handle GET request
  exports.get = handleGet;
  
  function handleGet(request) {
    // var view = resolve("container.html");
    const content = libs.portal.getContent();
    // const entry = libs.portal.getComponent();


    const id = `react4xp_${content._id}`;

    const props = {
        regionsData: content.page.regions,
        names: "main",
        tag: "main",
    };
    
    const component = libs.portal.getComponent();
    
    // const props = component.config;
    // props.model = createModel();
    

    // function createModel() {
    //   var model = {};
    //   var defaultColumnConfig = "100";
    //   model.regions = libs.bootstrapLayout.getRegionsWithColumnInfo(
    //     defaultColumnConfig
    //   );
    //   return model;
    // }
  
    return {
      body: libs.React4xp.render(
        component, 
        props,
        request,
        // options
        ),
    };
  }
  