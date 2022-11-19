{{--
  Template Name: Tabbed Template
--}}

@extends('layouts.app', ['header' => 'bg-warm-white'])

@section('content')
  @while (have_posts())
    @php(the_post())
    <div class="bg-warm-white">
      <div class="container grid grid-cols-2 pt-12">
        <div class="self-center">
          @include('partials.page-header')
          <div class="prose max-w-lg pb-24">@php(the_content())</div>
        </div>
        <div>
          {!! get_the_post_thumbnail(null, '16by9', [
              'class' => 'w-full',
              'sizes' => '80vw',
          ]) !!}
        </div>

      </div>
    </div>
    <div class="relative min-h-screen w-full overflow-hidden">
      <div class="container">

        <div class="js-tabs" id="tabs">

          <ul class="js-tabs__header mt-12 mb-24 flex flex-row justify-center gap-12">
            @foreach ($tabs as $tab)
              <li><a href="#{{ $tab->post_name }}"
                  class="js-tabs__title border-green-dark text-green-dark inline-block rounded border-2 bg-opacity-10 py-3 px-6 font-bold lowercase">{{ $tab->post_title }}</a>
              </li>
            @endforeach
          </ul>

          @foreach ($tabs as $tab)
            <div class="js-tabs__content">
              <div class="bg-green-dark mb-8 h-2 w-28"></div>
              <h2 class="font-italic text-green-dark mb-8 font-serif text-4xl">{{ $tab->post_title }}</h2>
              <div
                class="prose prose-h3:font-bold prose-h2:font-serif prose-blockquote:font-serif prose-blockquote:leading-snug prose-blockquote:border-green-light prose-headings:text-green-dark prose-blockquote:text-green-dark prose-blockquote:not-italic prose-h2:font-normal prose-h2:text-4xl mb-36">
                {!! $tab->post_content !!}
              </div>
            </div>
          @endforeach

        </div>

        <svg class="absolute -right-24 top-4 -z-10" xmlns="http://www.w3.org/2000/svg" width="418.04" height="628.62"
          viewBox="0 0 418.04 628.62">
          <path fill="#e3b4db"opacity="0.1"
            d="M1267.08,653.71c-41.64-22.08-89.87-34.56-140.55-35.41C927.3,615,842.48,779.87,852.31,923.57S1004.1,1015.66,1171,1222c29.94,37,64.94,29.65,98.6-2.37"
            transform="translate(-851.55 -618.25)" />
        </svg>

        <svg class="absolute -left-12 -bottom-0 -z-10" xmlns="http://www.w3.org/2000/svg" width="417.47" height="629.36"
          viewBox="0 0 417.47 629.36">
          <path fill="#bbd6d2" opacity="0.2"
            d="M-1.68,1661.38c41.47,22.41,89.6,35.26,140.27,36.51,199.2,4.91,285.31-159.33,276.61-303.1s-151.06-93.28-316.33-301c-29.65-37.25-64.7-30.16-98.61,1.6"
            transform="translate(1.68 -1068.64)" />
        </svg>

      </div>
    </div>

    <script>
      /**
       * Vanilla JavaScript Tabs v1.0.0
       * https://zoltantothcom.github.io/vanilla-js-tabs
       */
      var Tabs = function(e) {
        var n = document.getElementById(e.elem),
          a = e.open || 0,
          r = "js-tabs__title",
          c = "bg-green-dark",
          l = "js-tabs__content",
          o = n.querySelectorAll("." + r).length;

        function t(e) {
          n.addEventListener("click", i);
          for (var t = u(null == e ? a : e), l = 0; l < o; l++) n.querySelectorAll("." + r)[l].setAttribute("data-index",
            l), l === t && f(l)
        }

        function i(e) {
          -1 !== e.target.className.indexOf(r) && (e.preventDefault(), f(e.target.getAttribute("data-index")))
        }

        function s() {
          [].forEach.call(n.querySelectorAll("." + l), function(e) {
            e.style.display = "none"
          }), [].forEach.call(n.querySelectorAll("." + r), function(e) {
            var t, l;
            e.className = (t = e.className, l = new RegExp("( )" + c + "()", "g"), t.replace(l, ""))
          })
        }

        function u(e) {
          return e < 0 || isNaN(e) || o < e ? 0 : e
        }

        function f(e) {
          s();
          var t = u(e);
          n.querySelectorAll("." + r)[t].className += " " + c, n.querySelectorAll("." + l)[t].style.display = ""
        }

        function d() {
          n.removeEventListener("click", i)
        }
        return t(), {
          open: f,
          update: function(e) {
            d(), s(), t(e)
          },
          destroy: d
        }
      };

      var tabs = new Tabs({
        elem: "tabs",
        open: 0
      });
    </script>
  @endwhile

@endsection
