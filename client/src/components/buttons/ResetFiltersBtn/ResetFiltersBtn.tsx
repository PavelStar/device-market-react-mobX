import { ResetFilters } from "../../../Utils/ResetFilters";
import "./ResetFiltersBtn.scss";

const ClearFiltersBtn = () => {
    return (
        <button className="reset-filters-btn" onClick={ResetFilters}>
            Очистить фильтры
        </button>
    );
};

export default ClearFiltersBtn;
