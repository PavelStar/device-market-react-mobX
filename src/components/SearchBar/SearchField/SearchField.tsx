import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react'
import PageWidthState from '../../../store/PageWidthState';
import SearchState from '../../../store/SearchState';
import './SearchField.scss'

const SearchField = observer(() => {

    const { searchInputValue } = SearchState;

    const onHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
        SearchState.setIsResultsShown(true);
        SearchState.setSearchInputValue(e.currentTarget.value);
    };

    const onSearchFocus = () => {

        SearchState.setIsResultsShown(true)
    }

    return (
        <input
            value={searchInputValue}
            onChange={(e) => onHandleChange(e)}
            className="search-field"
            type="text"
            placeholder="Поиск по товарам"
            onFocus={onSearchFocus}
        />
    )
})

export default SearchField