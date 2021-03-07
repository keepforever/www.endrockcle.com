import React from 'react';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
    render() {
        return (
            <div style={{ flex: 1 }}>
                <div className="row center-xs">
                    <h3 style={{ color: 'lightgray' }}>{this.props.column.title}</h3>
                </div>
                <Droppable droppableId={this.props.column.id} type="TASK">
                    {(provided, snapshot) => {
                        // console.log('\n', '\n', `provided = `, provided, '\n', '\n');
                        return (
                            <div
                                className="p-4"
                                style={{ minHeight: '100px', flexGrow: 1 }}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                // isDraggingOver={snapshot.isDraggingOver}
                            >
                                {this.props.tasks.map((task, index) => {
                                    // console.log('\n', '\n', `task = `, task, '\n', '\n');
                                    return <Task key={task?.id} task={task} index={index} />;
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        );
    }
}
