var TodoItemView = Backbone.View.extend({
    tagName: "li",
    initialize : function(option){
        if(!option){
            throw new Error("Model was not specified.");
        }
    },

    render: function(){
        this.$el.html(this.model.get("description"));
        return this;
    }
});