<?php

/**
 * ---------------------------------------------------------------
 * NAILS MAIN APPLICATION
 * ---------------------------------------------------------------
 *
 * This is the kick off point for the main Nails Application.
 * Documentation: https://nailsapp.co.uk
 */

/*
 *---------------------------------------------------------------
 * Autoloader
 *---------------------------------------------------------------
 */
require_once __DIR__ . '/vendor/autoload.php';

/*
 *---------------------------------------------------------------
 * Nails Bootstrapper
 *---------------------------------------------------------------
 */
Nails\Bootstrap::run(__FILE__);

/*
 *---------------------------------------------------------------
 * CodeIgniter
 *---------------------------------------------------------------
 */
require_once BASEPATH . 'core/CodeIgniter.php';

/*
 *---------------------------------------------------------------
 * Nails Shutdown Handler
 *---------------------------------------------------------------
 */
Nails\Bootstrap::shutdown();
