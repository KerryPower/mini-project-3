import Dropdown from 'react-bootstrap/Dropdown';

export default function BasicDropdown({title, options}) {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
    </Dropdown.Toggle>
    <Dropdown.Menu>
        {options.map((option, index) => (
            <Dropdown.Item key={index} onClick={option.action}>
                {option.label}
            </Dropdown.Item>
        ))}
    </Dropdown.Menu>
</Dropdown>
  )
}