import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IItemData } from "../../../interfaces/IItemData";
import ProductSelectsState from "../../../store/ProductSelectsState";
import ResponseDataState from "../../../store/ResponseDataState";
import ColorSelect from "./ColorSelect/ColorSelect";
import MemorySelect from "./MemorySelect/MemorySelect";
import "./ProductSelects.scss";

const ProductSelects = observer(({ product }: { product: IItemData }) => {
    const navigate = useNavigate();

    const { responseData } = ResponseDataState;
    const { color, title } = product;

    const [productsWithSameTitle, setProductsWithSameTitle] = useState<IItemData[] | undefined>();
    const [colorsList, setColorsList] = useState<string[] | undefined>();
    const [memoryList, setMemoryList] = useState<string[] | undefined>();

    useEffect(() => {
        responseData && setProductsWithSameTitle(responseData.items.filter((item) => item.title === product.title));
    }, []);

    useEffect(() => {
        let colors: string[] = [];
        productsWithSameTitle &&
            productsWithSameTitle.forEach((item: IItemData) => {
                if (title === item.title && !colors.includes(item.color)) {
                    colors.push(item.color);
                }
            });

        setColorsList(colors);

        let memories: string[] = [];
        productsWithSameTitle &&
            productsWithSameTitle.forEach((item: IItemData) => {
                if (title === item.title && color === item.color) {
                    memories.push(item.features.memory);
                }
            });
        setMemoryList(memories);
    }, [productsWithSameTitle]);

    const onSelectHandleChange = (selectValue: string, selectType: string) => {
        if (selectType === "color") {
            let foundedItem = productsWithSameTitle?.find(
                (item) => item.color === selectValue && item.features.memory === product.features.memory
            );
            navigate(`/item/${foundedItem && foundedItem.id}`);
        }

        if (selectType === "memory") {
            let foundedItem = productsWithSameTitle?.find(
                (item) => item.color === product.color && item.features.memory === selectValue
            );
            navigate(`/item/${foundedItem && foundedItem.id}`);
        }
    };

    return (
        <div className="product-selects">
            <div className="product-selects__inner">
                {colorsList && (
                    <>
                        <ColorSelect colorsList={colorsList} onSelectHandleChange={onSelectHandleChange} />
                        {product.features.memory && memoryList && (
                            <MemorySelect memoryList={memoryList} onSelectHandleChange={onSelectHandleChange} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
});

export default ProductSelects;
