import { resetFilters } from "../../../Utils/resetFilters";
import "./ResetFiltersBtn.scss";

const ClearFiltersBtn = () => {
    return (
        <button className="reset-filters-btn" onClick={resetFilters}>
            Очистить фильтры
        </button>
    );
};

export default ClearFiltersBtn;
