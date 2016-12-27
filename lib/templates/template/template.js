/*****************************************************************************/
/* <%= name %>: Event Handlers */
/*****************************************************************************/
Template.<%= name %>.events({
  'click .add-<%= singularClassName %>': function(event, template){
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


/*****************************************************************************/
/* <%= singularName %>: Event Handlers */
/*****************************************************************************/
Template.<%= singularName %>.events({
  'click .edit-<%= singularClassName %>': function(event, template){
    if(template.edit<%= singularName %>.get() == true){
      template.edit<%= singularName %>.set(false);
    } else {
      template.edit<%= singularName %>.set(true);
    }
  },
  'click .delete-<%= singularClassName %>': function(event, template){
    Meteor.call("delete<%= singularName %>", this._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
         console.log("result", result);
      }
    });
  }
});

/*****************************************************************************/
/* <%= singularName %>: Helpers */
/*****************************************************************************/
Template.<%= singularName %>.helpers({
  edit<%= singularName %>: function() {
    return Template.instance().edit<%= singularName %>.get();
  }
});

/*****************************************************************************/
/* <%= singularName %>: Lifecycle Hooks */
/*****************************************************************************/
Template.<%= singularName %>.onCreated(function () {
  this.edit<%= singularName %> = new ReactiveVar(false);
});

Template.<%= singularName %>.onRendered(function () {
});

Template.<%= singularName %>.onDestroyed(function () {
});
