<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;
use Log1x\Navi\Navi;

class App extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = ["*"];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            "siteName" => $this->siteName(),
            "primaryNavigation" => $this->primaryNavigation(),
        ];
    }

    /**
     * Returns the site name.
     *
     * @return string
     */
    public function siteName()
    {
        return get_bloginfo("name", "display");
    }

    public function primaryNavigation()
    {
        $navigation = (new Navi())->build("primary_navigation");

        if ($navigation->isEmpty()) {
            return;
        }

        return $navigation->toArray();
    }
}
