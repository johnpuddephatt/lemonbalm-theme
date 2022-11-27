<article {{ post_class('') }}>

  <header class="bg-warm-white lg:mb-40">
    <div class="container relative py-12 lg:py-36">
      <img src="@asset('/images/case-study-header.png')" alt="" class="lg:absolute ml-auto right-12 top-0 lg:top-36 h-auto w-40 lg:w-64">
      <div class="text-green-light text-3xl font-bold">Case study</div>
      <h1 class="text-green-dark mt-8 mb-12 font-serif max-w-4xl text-5xl">{!! $post->post_title !!}</h1>
      <div class="prose prose-xl max-w-2xl">{!! wpautop($post->post_excerpt) !!}</div>

      {!! get_the_post_thumbnail(null, '16by9', [
          'class' => 'w-full max-w-xl mt-16  lg:-mb-96 mx-auto relative z-10',
          'sizes' => '80vw',
      ]) !!}

    </div>
    <div class="overflow-x-hidden">
      <svg class="h-auto min-w-full text-white" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
        viewBox="0 0 1258 123.77">
        <path fill="currentColor"
          d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
      </svg>
    </div>
  </header>

  <div class="container">
    <div class="bg-green-dark mb-8 h-2 w-28"></div>
    <div
      class="prose prose-h3:font-bold prose-h2:font-serif prose-blockquote:font-serif prose-blockquote:leading-snug prose-blockquote:border-green-light prose-headings:text-green-dark prose-blockquote:text-green-dark prose-blockquote:not-italic prose-h2:font-normal prose-h2:text-4xl mb-36">
      {{ the_content() }}
    </div>
  </div>

</article>
