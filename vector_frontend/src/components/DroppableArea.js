import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import CatCard from "./CatCard";

const DroppableArea = ({droppableId, data, setSelectedItem, indexAdd}) => {
  return (
  <Droppable droppableId={droppableId} direction="horizontal">
    {(provided, snapshot) => (
      <div
        className="d-flex"
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        <div className="d-flex">
          {data.map((item, index) => (
            <Draggable
              key={item.id ? item.id.toString() : index}
              draggableId={item.id ? item.id.toString() : index + indexAdd}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <CatCard setSelectedItem={setSelectedItem} catItem={item} />
                </div>
              )}
            </Draggable>
          ))}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
)};

export default DroppableArea;
