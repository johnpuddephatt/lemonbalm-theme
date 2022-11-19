@extends('layouts.app', ['header' => 'absolute top-0 left-0 right-0 z-10'])
@section('content')
  <div class="bg-warm-white flex min-h-[calc(100vh-4rem)] flex-row items-center">
    <div class="container relative mt-24 mb-12 grid grid-cols-2 items-center">
      <img class="absolute -top-20 -left-20 h-auto w-60" src="@asset('/images/hero-flower.png')" />
      <div>
        <h1 class="text-red-dark mb-4 font-serif text-4xl">Reconnecting people and nature.</h1>
        <p class="max-w-md text-lg">Lemon Balm is a Leeds-based social enterprise founded in 2015.
          We deliver programs of Horticultural Therapy and Design
          Landscapes large and small for the health and wellbeing of
          people and our planet.</p>
        <a class="border-red-light mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase" href="#services">How
          we can
          help</a>
      </div>
      <div class="relative">
        <img class="-ml-24 mt-24 block w-[calc(100%+6rem)] max-w-none" src="@asset('/images/woman-with-tea.png')" />
      </div>
    </div>
  </div>

  <div>
    <div class="container relative my-24 max-w-4xl">
      <span class="bg-warm-white absolute -left-8 top-24 -z-10 block h-36 w-36 rounded-full"></span>
      <span class="bg-warm-white absolute right-0 top-0 -z-10 block h-20 w-20 rounded-full"></span>
      <h2 class="text-gray mb-4 text-xl font-bold">Our holistic approach</h2>
      <p class="text-blue-light font-serif text-3xl">We take a holistic approach which is uniquely rooted in the science
        of
        horticultural therapy and landscape
        design, drawing on our shared expertise in ecology, volunteer management, community development & climate
        resilience.</p>
      <a class="text-blue-dark mt-8 inline-block rounded-xl border-2 border-black py-3 px-6 font-bold lowercase"
        href="#services">more
        about
        us</a>

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
    <div class="container grid grid-cols-2 gap-8 py-24">
      <h2 class="text-green-dark font-serif text-5xl">Our services</h2>
      <p class="relative text-lg">Whether you need to create a green space which promotes wellbeing or helps you to offset
        your
        environmental impact by locking in carbon, deliver a horticulture programme with measurable health and wellbeing
        outcomes or get support with funding, Lemon Balm provides a quality service which is evidence-based and effective.
        <img class="absolute top-full -right-24 h-auto w-48" src="@asset('/images/bee.png')" />
      </p>

    </div>

    <div class="container space-y-48 py-48">
      @foreach ($services as $service)
        <a href="{{ get_permalink($service->ID) }}" class="grid grid-cols-2 gap-16">
          <div>
            {!! get_the_post_thumbnail($service->ID, null, ['class' => 'w-full rounded-3xl']) !!}
          </div>
          <div class="{{ $loop->odd ? '-order-1' : '' }}">
            <div class="text-green-light text-2xl font-bold">{{ str_pad($loop->iteration, 2, '0', STR_PAD_LEFT) }}.
              {{ ucfirst($service->post_name) }}
            </div>
            <h3 class="text-green-dark my-6 font-serif text-3xl">{{ $service->post_title }}</h3>
            <p class="max-w-md text-lg">{{ wp_trim_words($service->post_excerpt, 30, '...') }}</p>
            <span
              class="text-green-dark border-green-dark mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase">read
              more</span>
          </div>
    </div>
    </a>
    @endforeach
  </div>

  </div>

  <div class="relative py-36">
    <div class="container relative">
      <span class="bg-warm-white absolute right-36 -top-12 z-10 block h-36 w-36 rounded-full"></span>
      <span class="bg-strategy-light absolute right-72 -top-24 z-10 block h-20 w-20 rounded-full"></span>

      <div class="bg-pink-white relative grid grid-cols-2 overflow-hidden rounded-3xl">

        <div class="p-16 pr-8">
          <figure class="text-green-dark">
            <blockquote class="font-serif text-3xl">
              “Lemon Balm brought an impressive and detailed understanding of Yorkshire Water’s vision to take
              responsibility for the water environment”
            </blockquote>
            <figcaption class="mt-4 font-bold">
              <p class="text-xl">Richard Flint,</p>
              CEO Yorkshire Water
            </figcaption>
          </figure>
          <a class="text-green-dark border-green-dark mt-8 inline-block rounded-xl border-2 py-3 px-6 font-bold lowercase"
            href="#">read more</a>
        </div>
        <div><img class="bg-red-light block h-full w-full object-cover object-center"></div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-0 -bottom-72 -z-10" width="417.47" height="629.36"
      viewBox="0 0 417.47 629.36">
      <path fill="#c3deda" opacity="0.2"
        d="M-1.77,4878c41.47,22.4,89.6,35.26,140.28,36.51,199.2,4.91,285.3-159.34,276.6-303.11s-151.06-93.28-316.33-301C69.14,4273.16,34.09,4280.26.17,4312"
        transform="translate(1.77 -4285.23)" />
    </svg>
  </div>

  <svg class="text-warm-white h-auto min-w-full" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
    viewBox="0 0 1258 123.77">
    <path fill="currentColor"
      d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
  </svg>

  <div class="bg-warm-white">
    <div class="container">
      <h2 class="text-red-dark mb-8 font-serif text-5xl">Have a project in mind?</h2>
      <p class="mb-2 max-w-md text-lg">We are based in Meanwood in Leeds but work with people and organisations all across
        the
        country.</p>
      <p class="mb-2 max-w-md text-lg">If you are interested in what we do, have a project in mind or would like to have a
        chat, send us a message.</p>
    </div>

    <div class="container grid grid-cols-2">
      <div>
        {!! do_shortcode('[contact-form-7 id="15" title="Contact form"]') !!}
      </div>
      <div>
        <img class="-ml-32 -mt-12 block w-[calc(100%+12rem)] max-w-none" src="@asset('/images/yoga.png')" />
      </div>
    </div>

  </div>
@endsection
