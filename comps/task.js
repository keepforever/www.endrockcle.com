import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task?.id === 'task-1';
        return (
            <Draggable draggableId={this.props.task?.id} index={this.props.index} isDragDisabled={isDragDisabled}>
                {(provided, snapshot) => {
                    return (
                        <div
                            className="row center-xs"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <p
                                className="p-1 mb-2"
                                style={{ border: '2px solid #ee3342', borderRadius: '8px', color: 'lightgray', width: '100%' }}
                            >
                                {this.props.task?.content}
                            </p>
                        </div>
                    );
                }}
            </Draggable>
        );
    }
}
