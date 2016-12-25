/*****************************************************************************/
/* <%= name %>: Event Handlers */
/*****************************************************************************/
Template.<%= name %>.events({
  'click .add-<%= className %>': function(event, template){
    if(template.add<%= singularName %>.get() == true){
      template.add<%= singularName %>.set(false);
    } else {
      template.add<%= singularName %>.set(true);
    }
  }
});

/*****************************************************************************/
/* <%= name %>: Helpers */
/*****************************************************************************/
Template.<%= name %>.helpers({
  <%= returnName %> () {
    return <%= name %>.find();
  },
  add<%= singularName %>: function() {
    return Template.instance().add<%= singularName %>.get();
  }
});

/*****************************************************************************/
/* <%= name %>: Lifecycle Hooks */
/*****************************************************************************/
Template.<%= name %>.onCreated(function () {
  this.add<%= singularName %> = new ReactiveVar(false);
});

Template.<%= name %>.onRendered(function () {
});

Template.<%= name %>.onDestroyed(function () {
});
