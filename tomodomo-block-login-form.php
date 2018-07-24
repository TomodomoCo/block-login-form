<?php
/**
 * Plugin Name: Tomodomo › Gutenberg › Login Form Block
 * Plugin URI: https://tomodomo.co
 * Description: Customizable login form block for Gutenberg
 * Author: Tomodomo
 * Author URI: https://tomodomo.co
 * Version: 1.0.0
 * Text Domain: tomodomo-block-login-form
 * Domain Path: /languages
 * Tags: gutenberg, block
 * Stable tag: 1.0.0
 * License: MIT
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

// Plugin folder path
if (!defined('TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_DIR')) {
	define('TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

// Plugin folder URL
if (!defined('TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_URL')) {
	define('TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_URL', plugin_dir_url(__FILE__));
}

// Initialise the block
if (!class_exists('\Tomodomo\Gutenberg\Block\LoginForm')) {
	require 'lib/LoginForm.php';

	$block = new \Tomodomo\Gutenberg\Block\LoginForm();
	$block->init();
}
