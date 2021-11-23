import React, { useState, useEffect } from "react";
import CatCard from "./CatCard";
import Overlay from "./Overlay";
import DroppableArea from "./DroppableArea";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Loader from "react-loader-spinner";
import moment from "moment";
import { fetchItems, setNewPositions } from "../utils/api.js";
import { handleEsc } from "../utils/helpers.js";
import { defaultData, REFRESH_TIME } from "../utils/constants.js";

// variable to store setTimeout id
var timeoutId;

const Main = ({}) => {

  // Items are fetched from database on page load
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    fetchItems().then((res) => {
      setData(res.data);
      setLastSaved(res.data[0].updated_at);
    });
  }, []);

  const [data, setData] = useState(defaultData); // hook to store items data
  const [selectedItem, setSelectedItem] = useState({}); // hook to store selected item to display as overlay
  const [saving, setSaving] = useState(false); // hook that controls display of loaders when new positions are being saved
  const [lastSaved, setLastSaved] = useState(""); //  hook that stroes lastSaved time information

  // function responsible for saving new positions of tiles when board is changed
  // parameter -
  // data (type Array)
  const saveNewPositions = (data) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setSaving(true);
      setNewPositions(data).then((res) => {
        setLastSaved(res.data.updated_at);
        setSaving(false);
      });
    }, REFRESH_TIME);
  };

  // function that handles setting of new positions when tiles are re-arranged
  // parameter -
  // r (type Array)
  const handleDrag = (r) => {
    let destinationIndex =
      r.destination.droppableId == "droppable2"
        ? r.destination.index + 2
        : r.destination.index;

    if (
      r.destination.index == r.source.index &&
      r.destination.droppableId == r.source.droppableId
    ) {
      return;
    }

    if (
      r.destination.droppableId == r.source.droppableId &&
      r.destination.droppableId == "droppable2"
    ) {
      destinationIndex += 1;
    }

    let foundItem = data.find((d) => d.id == r.draggableId);
    let copyData = [...data].filter((d) => d.id != r.draggableId);

    copyData.splice(destinationIndex, 0, foundItem);
    copyData.forEach((item, i) => {
      item.position = i;
    });

    saveNewPositions(copyData);
    setData(copyData);
  };

  return (
    <>
      <Overlay selectedItem={selectedItem} />
      <DragDropContext onDragEnd={(r) => handleDrag(r)}>
        <div className="d-flex flex-column">
          <DroppableArea
            droppableId="droppable1"
            data={data.slice(0, 3)}
            setSelectedItem={setSelectedItem}
            indexAdd={0}
          />
          <DroppableArea
            droppableId="droppable2"
            data={data.slice(3, 5)}
            setSelectedItem={setSelectedItem}
            indexAdd={3}
          />
        </div>
      </DragDropContext>
      <div>
        {saving ? (
          <div className="d-flex">
            <h3>Saving</h3>
            <Loader type="TailSpin" color="#00BFFF" />
          </div>
        ) : (
          <h3>
            Last Saved :{" "}
            {lastSaved
              ? moment(lastSaved).format("MMMM Do YYYY, h:mm:ss a")
              : null}
          </h3>
        )}
      </div>
    </>
  );
};

export default Main;
