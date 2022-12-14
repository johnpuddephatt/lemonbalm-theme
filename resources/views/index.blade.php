@extends('layouts.app', ['header' => 'absolute top-0 left-0 right-0 z-10'])
@section('content')
  <div class="bg-warm-white flex min-h-[calc(100vh-4rem)] flex-row items-center">
    <div class="container relative mt-72 lg:mt-24 mb-12 grid lg:grid-cols-2 items-center">
      <img class="absolute hidden lg:block -top-20 -left-20 h-auto w-60" src="@asset('/images/hero-flower.png')" />
      <div>
        <h1 class="text-red-dark mb-4 font-serif text-4xl">{{ get_bloginfo('description') }}</h1>
        <p class="max-w-md text-lg">{{ carbon_get_theme_option('introduction_copy') }}</p>
        <a class="border-red-light mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase"
          href="{{ carbon_get_theme_option('intro_link_url') }}">{{ carbon_get_theme_option('intro_link_text') }}</a>
      </div>
      <div class="relative">
        <img class="-ml-24 lg:mt-24 block w-[calc(100%+6rem)] max-w-none" src="@asset('/images/woman-with-tea.png')" />
      </div>
    </div>
  </div>

  <div>
    <div class="container relative my-24 max-w-4xl">
      <span class="bg-warm-white absolute -left-8 top-24 -z-10 block h-36 w-36 rounded-full"></span>
      <span class="bg-warm-white absolute right-0 top-0 -z-10 block h-20 w-20 rounded-full"></span>
      <h2 class="text-gray mb-4 text-xl font-bold">{{ carbon_get_theme_option('approach_heading') }}</h2>
      <p class="text-blue-light font-serif text-3xl">{{ carbon_get_theme_option('approach_text') }}</p>
      <a class="text-blue-dark mt-8 inline-block rounded-xl border-2 border-black py-3 px-6 font-bold lowercase"
        href="{{ carbon_get_theme_option('approach_link') }}">{{ carbon_get_theme_option('approach_link_text') }}</a>

      <img class="mt-8 -ml-8 block w-[calc(100%+4rem)] max-w-none" src="@asset('/images/holistic-approach.png')" />

    </div>
  </div>

  <div class="overflow-x-hidden">
    <svg class="text-green-white h-auto min-w-full" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
      viewBox="0 0 1258 123.77">
      <path fill="currentColor"
        d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
    </svg>
  </div>
  <div class="bg-green-white relative">
    <div class="container grid lg:grid-cols-2 gap-8 py-24" id="services">
      <h2 class="text-green-dark font-serif text-5xl">Our services</h2>
      <p class="relative text-lg">
        {{ carbon_get_theme_option('services_text') }}
        <img class="absolute top-full -right-24 h-auto w-48" src="@asset('/images/bee.png')" />
      </p>

    </div>

    <div class="container space-y-24 lg:space-y-48 py-48">
      @foreach ($services as $service)
        <a href="{{ get_permalink($service->ID) }}" class="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
          <div class="relative">
            {!! get_the_post_thumbnail($service->ID, '16by9', ['class' => 'w-full rounded-3xl']) !!}

            @if (!(($loop->iteration + 2) % 3))
              <img
                class="hidden lg:block absolute top-auto bottom-0 lg:-bottom-48 w-full lg:w-[120%] max-w-none -left-12 lg:-left-40"
                src="@asset('/images/home-service-1.png')" alt="">
            @elseif(!(($loop->iteration + 1) % 3))
              <img class="hidden lg:block absolute -top-32 w-full" src="@asset('/images/home-service-2.png')" alt="">
            @elseif(!($loop->iteration % 3))
              <img class="hidden lg:block absolute -left-48 -top-48 w-96" src="@asset('/images/home-service-3a.png')" alt="">
              <img class="hidden lg:block -bottom-36 left-[200%] absolute w-64" src="@asset('/images/home-service-3b.png')" alt="">
            @endif

            {!! wp_get_attachment_image(carbon_get_post_meta($service->ID, 'logo'), null, null, [
                'class' =>
                    'w-40 h-40 absolute -right-3 -top-3  ' .
                    ($loop->iteration % 2 ? 'lg:-left-8 ' : 'lg:-right-8 ') .
                    ($loop->iteration % 3 ? 'lg:-top-8 ' : 'lg:-bottom-8 '),
            ]) !!}
          </div>
          <div class="{{ $loop->even ? 'lg:-order-1' : '' }}">
            <div class="text-green-light text-2xl font-bold">{{ ucfirst($service->post_name) }}</div>
            <h3 class="text-green-dark my-6 font-serif text-3xl">{!! $service->post_title !!}</h3>
            <p class="max-w-md text-lg">{{ wp_trim_words($service->post_excerpt, 30, '...') }}</p>
            <span
              class="text-green-dark border-green-dark mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase">read
              more</span>
          </div>
        </a>
      @endforeach
    </div>

    @if (carbon_get_theme_option('casestudy_quote'))
      <div class="relative lg:py-36">
        <div class="container relative">
          <span class="bg-warm-white absolute right-36 -top-24 lg:-top-12 z-10 block h-36 w-36 rounded-full"></span>
          <span class="bg-strategy-light absolute right-72 -top-36 lg:-top-24 z-10 block h-20 w-20 rounded-full"></span>

          <div class="bg-pink-white relative grid lg:grid-cols-2 overflow-hidden rounded-3xl">

            <div class="p-16 pr-8">
              <figure class="text-green-dark">
                <blockquote class="font-serif text-3xl">
                  “{{ carbon_get_theme_option('casestudy_quote') }}”
                </blockquote>
                <figcaption class="mt-4 font-bold">
                  <p class="text-xl">{{ carbon_get_theme_option('casestudy_quote_author') }},</p>
                  {{ carbon_get_theme_option('casestudy_quote_authorrole') }}
                </figcaption>
              </figure>
              @if (carbon_get_theme_option('casestudy_link'))
                <a class="text-green-dark border-green-dark mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase"
                  href="{{ carbon_get_theme_option('casestudy_link') }}">read more</a>
              @endif
            </div>
            <div>
              {!! wp_get_attachment_image(carbon_get_theme_option('casestudy_image'), null, null, [
                  'class' => 'bg-red-light block h-full w-full object-cover object-center',
              ]) !!}
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 -bottom-72 -z-10" width="417.47" height="629.36"
          viewBox="0 0 417.47 629.36">
          <path fill="#c3deda" opacity="0.2"
            d="M-1.77,4878c41.47,22.4,89.6,35.26,140.28,36.51,199.2,4.91,285.3-159.34,276.6-303.11s-151.06-93.28-316.33-301C69.14,4273.16,34.09,4280.26.17,4312"
            transform="translate(1.77 -4285.23)" />
        </svg>
      </div>
    @endif

    <svg class="text-warm-white h-auto min-w-full" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
      viewBox="0 0 1258 123.77">
      <path fill="currentColor"
        d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
    </svg>

    <div class="bg-warm-white">
      <div class="container">
        <h2 class="text-red-dark mb-8 font-serif text-5xl">{{ carbon_get_theme_option('contact_heading') }}</h2>
        <div class="space-y-3 mb-2 max-w-md text-lg">{!! wpautop(carbon_get_theme_option('contact_text')) !!}</div>

      </div>

      <div class="container grid lg:grid-cols-2">
        <div>
          {!! do_shortcode('[contact-form-7 id="5" title="Contact form"]') !!}
        </div>
        <div>
          <img class="-ml-32 -mt-12 block w-[calc(100%+12rem)] max-w-none" src="@asset('/images/yoga.png')" />
        </div>
      </div>

    </div>
  @endsection
