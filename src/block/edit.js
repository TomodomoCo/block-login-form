/**
 * WordPress Dependencies
 */
import { Fragment } from "@wordpress/element";
import { ServerSideRender } from "@wordpress/components";

/**
 * Internal Dependencies
 */
import Inspector from "./inspector"

/**
 * Block edit component
 * @param {object} props
 */
const Editor = (props) => {
  return (
    <Fragment>
      <Inspector {...{...props}} />
      <ServerSideRender block="tomodomo/block-login-form" attributes={props.attributes} />
    </Fragment>
  )
}

export default Editor
