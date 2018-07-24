/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n"
import { InspectorControls } from "@wordpress/editor"

import {
  PanelBody,
  TextControl,
} from "@wordpress/components"

/**
 * Block inspector control.
 *
 * @param {object} props component props
 * @returns {object} Component
 */
const Inspector = (props) => {
  const {
    attributes,
    setAttributes,
  } = props

  // Inspector Controls
  return (
    <InspectorControls>
      <PanelBody title={__("Text Settings")}>
        <TextControl
          label={__("Username/Email Label")}
          value={attributes.label_username}
          onChange={(value) => {
            setAttributes({label_username: value})
          }}
        />
        <TextControl
          label={__("Password Label")}
          value={attributes.label_password}
          onChange={(value) => {
            setAttributes({label_password: value})
          }}
        />
        <TextControl
          label={__("Remember Me Label")}
          value={attributes.label_remember}
          onChange={(value) => {
            setAttributes({label_remember: value})
          }}
        />
        <TextControl
          label={__("Submit Button Label")}
          value={attributes.label_log_in}
          onChange={(value) => {
            setAttributes({label_log_in: value})
          }}
        />
      </PanelBody>
      <PanelBody title={__("Form Settings")}>
        <TextControl
          label={__("Redirect URL")}
          help={__("Where the user will be redirected after a successful login")}
          value={attributes.redirect}
          onChange={(value) => {
            setAttributes({redirect: value})
          }}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default Inspector
