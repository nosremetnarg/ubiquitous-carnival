<?php
/**
 * Plugin Name: Elementor Scheme_Color Class Issue
 **/

namespace Elementor;

\add_action(
  'plugins_loaded',
  function() {
    if ( ! class_exists( 'Elementor\Scheme_Color' ) ) {
      class Scheme_Color extends Core\Schemes\Color {}
    }
  }
);