var TodoItem = Backbone.Model.extend({

    defaults:{
        isCompleted: false
    },
    validate: function(attrs){
        if(!attrs.description)
        return "Description is requierd.";
    },
    toggle: function(){
        this.set("isCompleted", !this.get("isCompleted"));
    }
});