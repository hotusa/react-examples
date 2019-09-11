import React, {useState} from 'react'
import Select from "../Commons/Select";

export default function TabSelect() {

    const [value, setValue] = useState(null)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    let config = {
        isClearable: true,
        placeholder: 'Select option...',
        className: '',
        classNamePrefix: '',
        isSearchable: true,
        isMulti: true,
        noOptionsMessage: 'No hay datos',
        size: ''
    }

    const onChange = (e) => {
        setValue(e)
    }



    return (
        <Select
            isLoading={false}
            isDisabled={false}
            options={options}
            config={config}
            value={value}
            onChange={onChange}/>
    )
}