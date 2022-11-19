<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Tabbed extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["template-tabbed"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            "tabs" => $this->tabs(),
        ];
    }

    public function tabs()
    {
        global $post;
        return get_posts([
            "numberposts" => -1,
            "post_type" => "page",
            "post_parent" => $post->ID,
            "orderby" => "menu_order",
            "order" => "ASC",
            "numberposts" => -1,
        ]);
    }
}
