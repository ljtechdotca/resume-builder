import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useStore } from "../hooks/use-store";
import { fieldsData } from "../lib/defaults";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { Field } from "./Field";
import styles from "./Fields.module.scss";
import { AddIcon } from "./icons/index";

interface FieldsProps {
  name: FieldsType;
  onScrollSnap: (type: string) => void;
}

export const Fields: FC<FieldsProps> = ({ name, onScrollSnap }) => {
  const { updateData } = useStore();
  const { control, getValues } = useFormContext();
  const { fields, append, remove, swap, move } = useFieldArray({
    control,
    name,
  });

  function handleDragStart() {
    onScrollSnap("none");
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((e) => e.id === (active.id as string));
      const newIndex = fields.findIndex((e) => e.id === (over.id as string));
      move(oldIndex, newIndex);
      updateData(getValues());
      onScrollSnap("y mandatory");
    }
  }

  return (
    <div id={name} className={styles.root}>
      <h2>{fieldsData[name].title}</h2>
      <hr />
      <div className={styles.base}>
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <SortableContext
            items={fields.map(({ id }) => id)}
            strategy={verticalListSortingStrategy}
          >
            <Droppable id={`${name}-droppable`}>
              {fields.map((field, index) => {
                return (
                  <Draggable key={field.id} id={field.id}>
                    <Field
                      name={name}
                      options={{
                        field,
                        index,
                        onRemove: () => {
                          remove(index);
                          updateData(getValues());
                        },
                      }}
                    />
                  </Draggable>
                );
              })}
            </Droppable>
          </SortableContext>
        </DndContext>
        <button
          type="button"
          onClick={() => {
            append(fieldsData[name].defaultValues);
            updateData(getValues());
          }}
        >
          <AddIcon width={16} height={16} /> Add {fieldsData[name].title}
        </button>
      </div>
    </div>
  );
};
