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

    Container::make("theme_options", __("Homepage"))
        ->set_page_parent($parent_options) // reference to a top level container
        ->add_fields([
            Field::make("separator", "crb_separator", __("Introduction")),
            Field::make(
                "textarea",
                "introduction_copy",
                __("Introduction copy")
            ),
            Field::make("text", "intro_link_text", __("Intro button text")),
            Field::make("text", "intro_link_url", __("Intro button URL")),

            Field::make("separator", "crb_separator_2", __("Our approach")),
            Field::make("text", "approach_heading", __("Approach heading")),
            Field::make("text", "approach_text", __("Approach text")),
            Field::make("text", "approach_link", __("Approach button URL")),
            Field::make(
                "text",
                "approach_link_text",
                __("Approach button text")
            ),

            Field::make("separator", "crb_separator_3", __("Our services")),
            Field::make("textarea", "services_text", __("Services intro")),

            Field::make("separator", "crb_separator_4", __("Case Study")),
            Field::make("textarea", "casestudy_quote", __("Case Study quote")),
            Field::make(
                "text",
                "casestudy_quote_author",
                __("Case Study quote author")
            ),

            Field::make(
                "text",
                "casestudy_quote_authorrole",
                __("Case Study quote author")
            ),
            Field::make("image", "casestudy_image", __("Case Study image")),
            Field::make("text", "casestudy_link", __("Case Study link")),

            Field::make("separator", "crb_separator_5", __("Contact")),
            Field::make("text", "contact_heading", __("Contact heading")),
            Field::make("textarea", "contact_text", __("Contact text")),
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

    Container::make("post_meta", "Logo")
        ->where("post_type", "=", "service")
        ->set_context("side")
        ->add_fields([Field::make("image", "logo", __("Service logo"))]);

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
