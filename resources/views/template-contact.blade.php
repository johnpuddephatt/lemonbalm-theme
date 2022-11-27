{{--
  Template Name: Contact Template
--}}

@extends('layouts.app', ['header' => 'bg-white'])

@section('content')
  <article {{ post_class('') }}>
    <div class="overflow-x-hidden">
      <svg class="text-warm-white h-auto min-w-full" xmlns="http://www.w3.org/2000/svg" width="1258" height="123.77"
        viewBox="0 0 1258 123.77">
        <path fill="currentColor"
          d="M1100.75,75.29C1022.12,75.29,1022.12,0,943.5,0S864.87,75.29,786.25,75.29,707.62,0,629,0,550.37,75.29,471.75,75.29,393.12,0,314.5,0,235.87,75.29,157.25,75.29,78.62,0,0,0V124.13l1258-.36V0C1179.37,0,1179.37,75.29,1100.75,75.29Z" />
      </svg>
    </div>
    <div class="bg-warm-white">

      <div class="container relative pt-24 pb-36">

        <header class="lg:w-6/12">
          <h1 class="text-red-light bg-mt-8 mb-12 max-w-2xl font-serif text-5xl">{{ the_title() }}</h1>

          {{ the_excerpt() }}
        </header>

        <div class="lg:w-9/12 lg:ml-auto">
          {!! get_the_post_thumbnail() !!}
        </div>

        <div class="lg:w-7/12">
          {{ the_content() }}
        </div>

      </div>
    </div>

  </ @endsection
