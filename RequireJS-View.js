/**
 * @fileOverview ${ViewModuleName} Module
 *
 * @author Curtis Branum <curtis.branum@morsekode.com>
 * @version 2.0
 */

define(['jquery'], function ($) {

    'use strict';

    var ${ViewModuleName} = {

        /**
         * Initializes the UI Component View
         * Runs a single setupHandlers call, followed by createChildren and layout
         */
        init: function() {
            this.isEnabled = false;
            this.setupHandlers()
                .createChildren()
                .layout()
                .enable();
        },

        /**
         * Binds the scope of any handler functions
         * Should only be run on initialization of the view
         */
        setupHandlers: function() {
            return this;
        },

        /**
         * Create any child objects or references to DOM elements
         * Should only be run on initialization of the view
         */
        createChildren: function() {
            return this;
        },

        /**
         * Performs measurements and applies any positiong style logic
         * Should be run anytime the parent layout changes
         */
        layout: function() {
            return this;
        },

        /**
         * Enables the view
         * Performs any event binding to handlers
         * Exits early if it is already enabled
         */
        enable: function() {
            if (this.isEnabled) {
                return;
            }

            this.isEnabled = true;

            // Setup any event handlers

            return this;
        },

        /**
         * Disables the view
         * Tears down any event binding to handlers
         * Exits early if it is already disabled
         */
        disable: function() {
            if (!this.isEnabled) {
                return;
            }

            this.isEnabled = false;

            // Tear down any event handlers

            return this;
        },

        /**
         * Destroys the view
         * Tears down any events, handlers, elements
         * Should be called when the object should be left unused
         */
        destroy: function() {
            this.disable();

            // any permanent destruction here

            return;
        }

        /**
         * Event Handler
         * @param e
         *
         * onClickSomething: function(e) {
         *     // referencing $(e.target) because `this` context is bound to the parent object
         *     var $this = $(e.target);
         * } */
    };
    
    return ${ViewModuleName};
});