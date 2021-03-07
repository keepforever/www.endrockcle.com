import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// import styled from 'styled-components';
// const Container = styled.div`
//     border: 1px solid lightgrey;
//     border-radius: 2px;
//     padding: 8px;
//     margin-bottom: 8px;
//     transition: background-color 0.2s ease;
//     background-color: ${(props) => (props.isDragDisabled ? 'lightgrey' : props.isDragging ? 'lightgreen' : 'white')};
// `;

export default class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task?.id === 'task-1';
        // console.log('\n', '\n', `isDragDisabled = `, isDragDisabled, '\n', '\n');
        return (
            <Draggable draggableId={this.props.task?.id} index={this.props.index} isDragDisabled={isDragDisabled}>
                {(provided, snapshot) => {
                    // console.log('\n', '\n', `task provided  = `, provided, '\n', '\n');
                    return (
                        <div
                            className="row center-xs"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            // isDragging={snapshot.isDragging}
                            // isDragDisabled={isDragDisabled}
                        >
                            <p
                                className="p-3"
                                style={{ border: '2px solid #ee3342', borderRadius: '8px', color: 'lightgray' }}
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
