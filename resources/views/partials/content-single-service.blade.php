<article {{ post_class('max-w-100vw overflow-hidden') }}>
  <div class="overflow-x-hidden">
    <svg class="text-green-white h-auto min-w-full" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
      viewBox="0 0 1258 123.77">
      <path fill="currentColor"
        d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
    </svg>
  </div>
  <header class="bg-green-white mb-40">

    <div class="container relative lg:pt-24 pb-36">
      {!! wp_get_attachment_image(carbon_get_post_meta($post->ID, 'logo'), null, null, [
          'class' => 'w-40 h-40 ml-auto lg:w-64 lg:h-64 lg:absolute right-16 top-0',
      ]) !!}
      <div class="text-green-light text-3xl font-bold">{{ ucfirst($post->post_name) }}</div>
      <h1 class="text-green-dark mt-8 mb-12 max-w-2xl font-serif text-5xl">{!! $post->post_title !!}</h1>
      <div class="prose prose-xl max-w-2xl">{!! wpautop($post->post_excerpt) !!}</div>

      {!! get_the_post_thumbnail(null, '16by9', [
          'class' => 'w-full max-w-xl mt-16 -mb-96 ml-auto relative z-10',
          'sizes' => '80vw',
      ]) !!}

      <span
        class="{{ array_rand(array_flip(['bg-orange', 'bg-blue-dark', 'bg-design-light'])) }} absolute left-72 -bottom-16 block h-6 w-6 rounded-full"></span>
      <img src="@asset(array_rand(array_flip(['/images/service-featured-image-decoration.png', '/images/service-featured-image-decoration-2.png', '/images/service-featured-image-decoration-3.png'])))" class="hidden lg:block absolute -right-8 top-[calc(100%+12rem)] z-10 h-auto w-72" />

    </div>

  </header>

  <div class="container mb-24">
    <div class="bg-green-dark mb-8 h-2 w-28"></div>
    <div
      class="prose prose-h3:font-bold prose-h2:font-serif prose-blockquote:font-serif prose-blockquote:leading-snug prose-blockquote:border-green-light prose-headings:text-green-dark prose-blockquote:text-green-dark prose-blockquote:not-italic prose-h2:font-normal prose-h2:text-4xl mb-36">
      {{ the_content() }}
    </div>
  </div>

  @if (count($case_studies))
    <div class="container mb-36">
      <h2 class="text-red-dark mb-16 font-serif text-4xl">See our case studies</h2>
      <div class="my-16 space-y-4">
        @foreach ($case_studies as $case_study)
          <a href="{{ get_permalink($case_study->ID) }}"
            class="bg-warm-white flex flex-col lg:flex-row justify-between overflow-hidden rounded-3xl">
            <div class="p-8 flex-1">
              <h3 class="text-green-dark mb-2 font-serif text-4xl">{{ $case_study->post_title }}</h3>
              <p class="max-w-lg">{{ wp_trim_words($case_study->post_excerpt, 30, '...') }}</p>
            </div>
            <div class="lg:w-72 hidden lg:block">
              {!! get_the_post_thumbnail($case_study->ID, '16by9', ['class' => 'h-full w-full object-cover object-center']) !!}

            </div>
          </a>
        @endforeach
      </div>
    </div>
  @endif
</article>
