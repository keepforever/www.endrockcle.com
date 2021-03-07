import React from 'react';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
    render() {
        return (
            <div style={{ flex: 2 }}>
                <div className="row center-xs">
                    <h3 className="mb-0" style={{ color: 'lightgray' }}>{this.props.column.title}</h3>
                </div>
                <Droppable droppableId={this.props.column.id} type="TASK">
                    {(provided, snapshot) => {
                        return (
                            <div
                                className="py-4 px-6"
                                style={{ minHeight: '100px', flexGrow: 1 }}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.tasks.map((task, index) => {
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
