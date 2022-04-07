import ResponseDataState from "../../../../store/ResponseDataState";
import ProductSelectsState from "../../../../store/ProductSelectsState";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router";
import "./MemorySelect.scss";
import ItemDataState from "../../../../store/ItemDataState";

const MemorySelect = observer(
    ({ memoryList, onSelectHandleChange }: { memoryList: string[]; onSelectHandleChange: any }) => {
        const { itemData } = ItemDataState;

        return (
            <div className="memory-select">
                <h3 className="memory-select__colors-title">Объем памяти</h3>
                <ul className="memory-select__memory-list">
                    {itemData &&
                        memoryList.map((memory: string) => {
                            return (
                                <li
                                    className={
                                        itemData.features.memory === memory
                                            ? "memory-select__memory-wrap memory-select__memory-wrap--active"
                                            : "memory-select__memory-wrap"
                                    }
                                >
                                    <button
                                        className={
                                            itemData.features.memory === memory
                                                ? "memory-select__memory-btn memory-select__memory-btn--active"
                                                : "memory-select__memory-btn"
                                        }
                                        type="button"
                                        onClick={() => onSelectHandleChange(memory, "memory")}
                                        disabled={memoryList.length <= 1 ? true : false}
                                    >
                                        {memory}
                                    </button>
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
);

export default MemorySelect;
