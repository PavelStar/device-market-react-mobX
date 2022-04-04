import { observer } from 'mobx-react-lite';
import { IItemData } from '../../../interfaces/IItemData';
import FiltersSettingsState from '../../../store/FiltersSettingsState';
import ItemCard from '../../ItemCard/ItemCard';
import './ResultsList.scss'

interface IResultsList {
    responseItems?: IItemData[] | undefined;
}

const ResultsList = observer(() => {

    const { resultsByPagination } = FiltersSettingsState;


    return (
        <ul className="results-list">
            {resultsByPagination && resultsByPagination.map((item: IItemData) => {
                return <ItemCard inPageView="inPage" item={item} />;
            })}
        </ul>
    )
})

export default ResultsList