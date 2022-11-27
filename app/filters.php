<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter("excerpt_more", function () {
    return sprintf(
        ' &hellip; <a href="%s">%s</a>',
        get_permalink(),
        __("Continued", "sage")
    );
});

add_filter(
    "carbon_fields_theme_options_container_admin_only_access",
    "__return_false"
);
