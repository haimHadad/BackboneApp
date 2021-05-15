var TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize : function(option){
        if(!option){
            throw new Error("Model was not specified.");
        }
        this.model.on("change", this.render, this);
    },

    events:{
        "click #toggle": "onClickToggle",
        "click #delete": "onClickDelete"
    },

    onClickDelete: function(){
        this.model.destroy();    
    },
    
    onClickToggle: function(){
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());   
    },

    render: function(){
        this.$el.attr("id", this.model.id)

        this.$el.toggleClass("completed", this.model.get("completed"));

        var checked = this.model.get("completed") ? "checked" : "";

        this.$el.html("<input id='toggle' type='checkbox' " + 
                        checked+"></input>&nbsp;" + 
                        this.model.escape("title") +
                        "&nbsp;<button id='delete'>Delete</button>"
                    );
        return this;
    }
});