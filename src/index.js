/**
 * WordPress Dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal Dependencies
 */
import Editor from "./block/edit";

/**
 * Register slider block.
 */
registerBlockType("tomodomo/block-login-form", {
  title: __("Login Form"),
  keyword: [__("login"), __("form")],
  icon: {
    background: "#963f69",
    foreground: "#FFFFFF",
    src: "admin-network",
  },
  category: "widgets",
  attributes: {
    label_username: {
      type: "string",
      default: '',
    },
    label_password: {
      type: "string",
      default: '',
    },
    label_remember: {
      type: "string",
      default: '',
    },
    label_log_in: {
      type: "string",
      default: '',
    },
    redirect: {
      type: "string",
      default: '',
    },
  },
  supports: {
    multiple: false,
    customClassName: false,
  },
  edit: Editor,
  save: (props) => {
    return null
  },
})
