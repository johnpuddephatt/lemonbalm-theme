<?php

/**
 * Theme block styles.
 */

if (function_exists("register_block_style")) {
    register_block_style("core/media-text", [
        "name" => "rounded",
        "label" => __("Rounded image", "textdomain"),
        "is_default" => false,
        "inline_style" =>
            ".wp-block-media-text.is-style-rounded { margin: 6rem 0rem; } .wp-block-media-text.is-style-rounded img { max-width: 250px; margin: 0 auto; border-radius: 9999px; overflow: hidden; }",
    ]);

    register_block_style("core/group", [
        "name" => "bleed-background",
        "label" => __("Bleed background", "textdomain"),
        "is_default" => false,
        "inline_style" =>
            ".wp-block-group.is-style-bleed-background {padding: 6rem 2rem 8rem; margin: 6rem -2rem 18rem; position: relative; } .wp-block-group.is-style-bleed-background::after { background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjU4IiBoZWlnaHQ9IjEyMy43NyIKICAgIHZpZXdCb3g9IjAgMCAxMjU4IDEyMy43NyI+CiAgICA8cGF0aCBmaWxsPSIjZmZmIgogICAgICBkPSJNMTEwMC43NSw3NS4yOUMxMDIyLjEyLDc1LjI5LDEwMjIuMTIsMCw5NDMuNSwwUzg2NC44Nyw3NS4yOSw3ODYuMjUsNzUuMjksNzA3LjYyLDAsNjI5LDAsNTUwLjM3LDc1LjI5LDQ3MS43NSw3NS4yOSwzOTMuMTIsMCwzMTQuNSwwLDIzNS44Nyw3NS4yOSwxNTcuMjUsNzUuMjksNzguNjIsMCwwLDBWMTI0LjEzbDEyNTgtLjM2VjBDMTE3OS4zNywwLDExNzkuMzcsNzUuMjksMTEwMC43NSw3NS4yOVoiIC8+CiAgPC9zdmc+'); background-size: auto 100%; position: absolute; display: block; content: ''; width: calc(100vw + 4rem); top: 100%; height: 12rem; left: calc(560px - 50vw);  } .wp-block-group.is-style-bleed-background::before { position: absolute; display: block; content: ''; background: inherit; left: calc(560px - 50vw); z-index: -1; width: calc(100vw + 4rem); top: -3rem; bottom: -12rem; }",
    ]);

    // register_block_style("core/image", [
    //     "name" => "rotated-image",
    //     "label" => __("Rotated Image", "textdomain"),
    //     "is_default" => false,
    //     "inline_style" =>
    //         ".wp-block-image.is-style-rotated-image { margin-top: var(--gallery-block--gutter-size, 16px) !important; margin-bottom: var(--gallery-block--gutter-size, 16px) !important; transform: rotate(8deg); transform-origin: center center; }",
    // ]);

    // add_filter(
    //     "register_block_type_args",
    //     function ($args, $name) {
    //         if ($name == "core/image") {
    //             $args["render_callback"] = function ($attributes, $content) {
    //                 return str_replace("</figure>", "", $content) .
    //                     view("partials.image-tag", [
    //                         "thumbnail_id" => $attributes["id"],
    //                         "position" => "left",
    //                     ])->render() .
    //                     "</figure>";
    //             };
    //         }
    //         return $args;
    //     },
    //     10,
    //     3
    // );
}
