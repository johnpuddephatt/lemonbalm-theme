<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

add_action("carbon_fields_register_fields", function () {
    $parent_options = Container::make(
        "theme_options",
        __("Theme Options")
    )->add_fields([
        Field::make("text", "contact_email", __("Contact email")),
        Field::make("textarea", "footer_text", __("Footer Text")),
    ]);

    Container::make("theme_options", __("Social Links"))
        ->set_page_parent($parent_options) // reference to a top level container
        ->add_fields([
            Field::make("text", "facebook", __("Facebook Link")),
            Field::make("text", "twitter", __("Twitter Link")),
            Field::make("text", "instagram", __("Instagram Link")),
            Field::make("text", "linkedin", __("LinkedIn Link")),
            Field::make("text", "youtube", __("YouTube Link")),
            Field::make("text", "vimeo", __("Vimeo Link")),
        ]);

    Container::make("post_meta", "Case studies")
        ->where("post_type", "=", "service")
        ->set_context("side")
        ->add_fields([
            Field::make(
                "association",
                "casestudies",
                __("Associated case studies")
            )->set_types([
                [
                    "type" => "post",
                    "post_type" => "casestudy",
                ],
            ]),
        ]);

    Container::make("post_meta", "Project details")
        ->where("post_type", "=", "casestudy")
        ->set_context("side")
        ->add_fields([
            Field::make("text", "client", __("Client name")),
            Field::make("text", "location", __("Location")),
            Field::make("text", "date", __("Date")),
            Field::make("text", "role", __("Our role")),
            Field::make("textarea", "services", __("Services provided")),
        ]);
});

add_action("after_setup_theme", function () {
    require_once get_template_directory() . "/vendor/autoload.php";
    \Carbon_Fields\Carbon_Fields::boot();
});
