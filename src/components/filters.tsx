import React from "react"

import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store/state";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}

export default TodoListFilters