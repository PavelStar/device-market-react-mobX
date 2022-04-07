import { observer } from "mobx-react-lite";
import { setColorName } from "../../../../Utils/setColorName";
import ItemDataState from "../../../../store/ItemDataState";
import "./ColorSelect.scss";

const ColorSelect = observer(
    ({ colorsList, onSelectHandleChange }: { colorsList: string[]; onSelectHandleChange: any }) => {
        const { itemData } = ItemDataState;

        return (
            <div className="color-select">
                <h3 className="color-select__colors-title">Цвет</h3>
                <ul className="color-select__colors-list">
                    {itemData &&
                        colorsList.map((colorItem: string) => {
                            const colorName = setColorName(colorItem);

                            const btnColor = {
                                backgroundColor: `${colorName}`,
                            };

                            return (
                                <li
                                    className={
                                        colorItem === itemData.color
                                            ? "color-select__color-wrap color-select__color-wrap--active"
                                            : "color-select__color-wrap"
                                    }
                                >
                                    <button
                                        className={
                                            itemData.color === colorItem
                                                ? "color-select__color-btn color-select__color-btn--active"
                                                : "color-select__color-btn"
                                        }
                                        style={btnColor}
                                        type="button"
                                        onClick={() => onSelectHandleChange(colorItem, "color")}
                                        disabled={colorsList.length <= 1 ? true : false}
                                    ></button>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
);

export default ColorSelect;
