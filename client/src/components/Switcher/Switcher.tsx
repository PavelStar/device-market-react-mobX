import { observer } from 'mobx-react-lite'
import FiltersSettingsState from '../../store/FiltersSettingsState'
import Switch from "@mui/material/Switch";
import './Switcher.scss'

const Switcher = observer(({ name, state }: { name: string, state: boolean }) => {

    const switchSlider = () => {
        if (name === "isDiscountSwitch") FiltersSettingsState.setIsDiscount(!state)
        if (name === "isAvailableSwitch") FiltersSettingsState.setIsAvailable(!state)
    }

    // const [color] 

    return (
        <Switch
            onChange={switchSlider}
            checked={state}
            name={`${name}`}
        />
    )
})

export default Switcher