import './Field.css'

const Field = ({ type = 'text', label, placeholder, value, onChange, required }) => {

    const onType = (event) => {
        onChange(event.target.value)

    }

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onType}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Field