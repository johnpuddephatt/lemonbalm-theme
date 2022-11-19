<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Home extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["index"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            "services" => $this->services(),
        ];
    }

    public function services()
    {
        global $post;
        return get_posts([
            "numberposts" => -1,
            "post_type" => "service",
        ]);
    }
}
