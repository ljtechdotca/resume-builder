import { FC, useContext } from "react";
import { StoreContext } from "../App";
import { layoutSizes } from "../lib/defaults";
import styles from "./OptionsForm.module.scss";

const colors = ["#f44336", "#ff6600", "#05a05a", "#1e90ff", "#b568f4"];
const layouts: Record<LayoutType, any> = {
  card: { name: "Business Card", components: ["SimpleCard"] },
  cv: { name: "CV Resume", components: ["SimpleColumn"] },
};

export const OptionsForm: FC = () => {
  const { store, setStore } = useContext(StoreContext);

  function handlePathValue(path: string, value: any) {
    setStore((currentStore) => ({ ...currentStore, [path]: value }));
  }

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
                onClick={() => handlePathValue("primaryColor", color)}
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
              onClick={() => handlePathValue("secondaryColor", color)}
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
                    onClick={() => handlePathValue("layout", type)}
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
