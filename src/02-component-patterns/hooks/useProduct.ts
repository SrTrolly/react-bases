import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}


export const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {

    const [counter, setcounter] = useState(value);

    const isControlled = useRef(!onchange)

    const increaseBy = (value: number) => {

        console.log(isControlled.current);

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0)

        setcounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
        setcounter(value);
    }, [value])


    return {
        counter,
        increaseBy
    }

}