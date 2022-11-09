import React from "react"

import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../store/state";
import TodoListFilters from "./filters";
import TodoListStats from "./status";
import TodoItemCreator from "./add";

import TodoItem from "./Item"

function TodoList() {
    // changed from todoListState to filteredTodoListState
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem item={todoItem} key={todoItem.id} />
            ))}
        </>
    );
}

export default TodoList