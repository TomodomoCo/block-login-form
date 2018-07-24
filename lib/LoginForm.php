<?php

namespace Tomodomo\Gutenberg\Block;

class LoginForm
{

	/**
	 * Block attributes
	 *
	 * @var array
	 */
	protected $attributes;

	/**
	 * Start the plugin
	 *
	 * @return void
	 */
	public function init()
	{
		$this->registerHooks();

		return;
	}

	/**
	 * Hook into actions and filters.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	private function registerHooks()
	{
		add_action('init', [$this, 'register']);

		return;
	}

	/**
	 * Registers block (scripts/style)
	 *
	 * @since  1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function register()
	{
		if (!function_exists('register_block_type')) {
			return;
		}

		// Block editor JS
		wp_register_script(
			'tomodomo-block-login-form-editor-js',
			TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_URL . 'build/script.js',
			[
				'wp-i18n',
				'wp-blocks',
				'wp-element',
			],
			filemtime(TOMODOMO_BLOCK_LOGIN_FORM_PLUGIN_DIR . 'build/script.js')
		);

		// Register the block
		register_block_type('tomodomo/block-login-form', [
			'attributes' => [
				'label_username' => [
					'type'    => 'string',
					'default' => '',
				],
				'label_password' => [
					'type'    => 'string',
					'default' => '',
				],
				'label_remember' => [
					'type'    => 'string',
					'default' => '',
				],
				'label_log_in' => [
					'type'    => 'string',
					'default' => '',
				],
				'redirect' => [
					'type'    => 'string',
					'default' => '',
				],
			],
			'editor_script'   => 'tomodomo-block-login-form-editor-js',
			'render_callback' => [$this, 'render'],
		]);
	}

	/**
	 * Renders the slider.
	 *
	 * @param array $attributes The block attributes registered below.
	 * @return string
	 */
	public function render($attributes)
	{
		// Use the default for empty attributes
		$attributes = array_filter($attributes, function ($value) {
			return !empty($value);
		});

		// Set our defaults
		$defaults = [
			'echo' => false,
		];

		// Merge the defaults and custom attributes
		$args = wp_parse_args($defaults, $attributes);

		// Generate the login form
		$content = wp_login_form($args);

		// Return the login form
		return $content;
	}

}
