import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
const TextFieldGroup = ({ name, value, label, error, type, onChange }) => {
  return (
      <div className = {classnames("form-group", {"has-error": error})}>
        <label className = "control-label">{label}</label>
        <input type = {type} className = "form-control" name={name} value = {value}  onChange = {onChange}/>
        { error && <span className = "help-block">{ error }</span>}
      </div>
  )
}
TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
TextFieldGroup.defaultProps = {
  type: "text"
}
export default TextFieldGroup
