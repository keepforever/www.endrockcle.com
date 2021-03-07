import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from '../utils/initial-data';
import Column from './column';

class SetListBuilder extends React.Component {
    state = initialData;

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState);
            return;
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        console.log('\n', `before set state `, '\n');
        this.setState(newState);
    };

    render() {
        // console.log('\n', '\n', `this.state = `, this.state, '\n', '\n');
        // console.log('\n', `this.state.columns['column-1'].taskIds = `, this.state.columns['column-1'].taskIds, '\n');
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{ display: 'flex' }}>
                    {this.state.columnOrder.map((columnId) => {
                        const column = this.state.columns[columnId];
                        const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
                        // console.log('\n', '\n', `tasks = `, tasks, '\n', '\n');
                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </div>
            </DragDropContext>
        );
    }
}

export default SetListBuilder;
