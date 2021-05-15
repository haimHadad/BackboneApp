var TodoItemsView = Backbone.View.extend({
    tagName: "ul",
    
    id: "todoItems",

    initialize: function(options){
        if(!(options && options.model)){
            throw new Error("model was not specified.");
        }
        this.model.on("add", this.onAddTodoItem, this)
    },

    events: {
        "click #add": "onClickAdd",
        "keypress #newTodoItem": "onKeyPressed"
    },
    
    onClickAdd: function(){
        var $textBox = this.$("#newTodoItem");

        if($textBox.val()){
            var todoItem = new TodoItem({description: $textBox.val()});
            this.model.add(todoItem);
    
            $textBox.val("")
        }
    },

    onKeyPressed: function(e){
        if(e.keyCode == 13){
            this.onClickAdd();
        }   
    },

    onAddTodoItem: function(todoItem){
        var view = new TodoItemView({model: todoItem});
        this.$el.append(view.render().$el);
    },

    render: function(){
        var self = this;

        this.$el.append("<input autofocus type='text' placeholder='Enter new description' id='newTodoItem'></input>");
        this.$el.append("<button id='add'>Add</button>");

        this.model.each((todoItem) => {
            var view = new TodoItemView ({model: todoItem});
            self.$el.append(view.render().$el);
        });

        return this;
    }
});