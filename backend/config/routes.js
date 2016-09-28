"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
  routes: {
    'POST /v1/auth/login' : "AuthController.signin",
    'POST /v1/auth/register' : "AuthController.signup",
  }
};
