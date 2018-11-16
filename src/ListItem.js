import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import flow from 'lodash/flow'
const itemSource = {
    beginDrag(props){
        return props.item
    },
    endDrag(props, monitor, component){
        return props.handleDrop(props.item.id)
    }
}

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class ListItem extends Component {
    render(){
        const {isDragging, connectDragSource, item} = this.props
        const opacity = isDragging ? 0 : 1
        
        return connectDragSource(
            <div className="list-item center"
            style={{ opacity }}>
                   {item.name}
            </div>
        )
    }
}



export default flow(
    DragSource(
        'list-item',
        itemSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        })
    ),
    DropTarget('list-item', itemTarget, (connect) => {
        connectDropTarget: connect.dropTarget()
    })
)(ListItem)
