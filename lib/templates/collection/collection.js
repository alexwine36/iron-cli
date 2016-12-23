
<% if (where === 'client') { -%>
<%= name %> = new Mongo.Collection(null);
<% } else { -%>
<%= name %> = new Mongo.Collection('<%= collectionName %>');

var Schemas = {};
<% } %>

<% if (where !== 'client') { -%>
Schemas.<%= schemaName %> = new SimpleSchema ({
  title: {
    type: String,
    label: "Title"
  },


  // Created At and Updated At

  createdAt: {
    type: Date,
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  // Force value to be current date (on server) upon update
  // and don't allow it to be set upon insert.
  updatedAt: {
    type: Date,
    autoform: {
      type: "hidden"
    },
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
});

// <%= name %>.helpers({
//   joinedDoc() {
//     return joinedDocs.find({<%= collectionName %>Ids: this._id});
//   }
// });

<%= name %>.attatchSchema(Schemas.<%= schemaName %>);

<% } %>
