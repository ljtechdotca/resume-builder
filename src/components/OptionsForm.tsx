import { FC } from "react";
import { useStore } from "../hooks/use-store";
import { layoutSizes } from "../lib/defaults";
import styles from "./OptionsForm.module.scss";

const colors = ["#f44336", "#ff6600", "#05a05a", "#1e90ff", "#b568f4"];
const layouts: Record<LayoutType, any> = {
  card: { name: "Business Card", components: ["SimpleCard"] },
  resume: { name: "CV Resume", components: ["SimpleResume"] },
};

export const OptionsForm: FC = () => {
  const { store, updateStore } = useStore();

  return (
    <div className={styles.root}>
      <h2>Options</h2>
      <hr />
      <div className={styles.field}>
        <div>Primary Color</div>
        <div>
          <div className={styles.colors}>
            {colors.map((color) => (
              <button
                key={color}
                className={styles.color}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => updateStore("primaryColor", color)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.field}>
        <div>Secondary Color</div>
        <div className={styles.colors}>
          {colors.map((color) => (
            <button
              key={color}
              className={styles.color}
              style={{
                backgroundColor: color,
              }}
              onClick={() => updateStore("secondaryColor", color)}
            />
          ))}
        </div>
      </div>
      <div className={styles.field}>
        <div>Layout Type</div>
        <div>
          {Object.keys(layouts).map((type) => (
            <div key={"layout" + type}>
              <div>{layouts[type as LayoutType].name}</div>
              {layouts[type as LayoutType].components.map(
                (component: string) => (
                  <button
                    key={type + component}
                    className={styles.component}
                    onClick={() => updateStore("layout", type)}
                  >
                    <img
                      src="/logo192.png"
                      alt=""
                      height={layoutSizes[type as LayoutType].height * 10}
                      width={layoutSizes[type as LayoutType].width * 10}
                    />
                    {component}
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
