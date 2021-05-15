
$(document).ready(()=>{
    var todoItems = new TodoItems();
    todoItems.fetch({
        error: () => {
            alert("Server fetch has failed");
        }
    });

    var todoItemsView = new TodoItemsView({model: todoItems});
    $("body").append(todoItemsView.render().$el)
})