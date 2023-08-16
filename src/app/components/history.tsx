'use client';

import { useState } from 'react';
import { dataHistory, iHistory } from '@/data/history';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

const History: React.FC<iHistory> = ({ companyName, contents }) => {
  const [dataContents, updateContents] = useState(contents);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    };

    const items = Array.from(dataContents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateContents(items);
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppableHistory'>
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {dataContents.map((content, index) => {
                return (
                  <Draggable key={index} draggableId={index+''} index={index}>
                    {(provided, snapshot) => (
                      <div className='max-w-md mx-auto rounded-xl' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <p className="my-2 ml-2 text-blue-500 text-base">
                          {companyName}
                        </p>
                        <p className="my-2 ml-2 text-base/2 text-black-500">
                          {content.beginDate} ~ {content.endDate}
                        </p>
                        <p className="my-2 mx-2 text-slate-500">
                          {content.description}
                        </p>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default function ComponentHistory({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-8 px-8 max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <div className="tracking-wide text-sm text-indigo-500 font-semibold">
        History
      </div>
      <div>
        {
          dataHistory.map((history, index) => {
            return <History {...history} key={index} />;
          })
        }
      </div>
    </div>
  )
}