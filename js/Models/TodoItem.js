var TodoItem = Backbone.Model.extend({

    defaults:{
        completed: false
    },

    urlRoot: "http://jsonplaceholder.typicode.com/todos",

    validate: function(attrs){
        if(!attrs.title)
        return "Title is requierd.";
    },
    toggle: function(){
        this.set("completed", !this.get("completed"));
    }
});