var TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize : function(option){
        if(!option){
            throw new Error("Model was not specified.");
        }
        this.model.on("change", this.render, this);
    },

    events:{
        "click #toggle": "onClickToggle"
    },

    onClickToggle: function(){
        this.model.toggle();
        console.log(this.model.toJSON());   
    },

    render: function(){
        this.$el.toggleClass("completed", this.model.get("isCompleted"));

        var checked = this.model.get("isCompleted") ? "checked" : "";

        this.$el.html("<input id='toggle' type='checkbox' "+checked+"></input>&nbsp;" + this.model.escape("description"));
        return this;
    }
});