<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Service extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["partials.content-single-service"];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            "case_studies" => $this->case_studies(),
        ];
    }

    public function case_studies()
    {
        global $post;
        return get_posts([
            "numberposts" => -1,
            "post_type" => "casestudy",
            "include" => array_column(
                carbon_get_post_meta($post->ID, "casestudies"),
                "id"
            ),
        ]);
    }
}
