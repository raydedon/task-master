import {getRandomColor, getRandomHexColor, hexColorToGeneralName} from "./utils/colors";
import {FormEvent, useEffect, useMemo, useState} from "react";
import './implementation.scss';
import FloorPlan from "./component/FloorPlan";

export interface IColor {
    name: string;
    value: string;
}

const Implementation = () => {

    const [color, setColor] = useState<string>();
    const [rotateClass, setRotateClass] = useState<string>();
    const handleClick = () => {
        if(!rotateClass) {
            setRotateClass('rotate-anim-0-180');
        } else if (rotateClass === 'rotate-anim-0-180') {
            setRotateClass('rotate-anim-180-360');
        } else if (rotateClass === 'rotate-anim-180-360') {
            setRotateClass('rotate-anim-0-180');
        }
    }

    const handleColorChange = (e: FormEvent<HTMLSelectElement>) => {
        setColor(e.currentTarget.value);
    }

    const colors = useMemo(() => {
        return getRandomColor();
    }, [])

    useEffect(() => {
        setColor(colors[0].value)
    }, [colors])


    return (
        <div className="implementation-container">
            <div className="top-bar">
                <button onClick={handleClick}>Toggle</button>
                <select onChange={handleColorChange} value={color} className="select">
                    {colors.map(({name, value}) => {
                        return <option key={name} value={value}>{name}</option>
                    })}
                </select>
            </div>
            <FloorPlan color={color} className={rotateClass}/>
        </div>
    )

}

export default Implementation;