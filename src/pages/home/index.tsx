import * as React from 'react'

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <main>
      <div className='jumbotron'>
        <h1 className='text-center'>
          <img src='/img/classic.png' alt='snufflupadata' />
        </h1>

        <p className='text-center'>
          A long time ago, in a galaxy far, far away, Snuffleupadata started as
          a inside joke between a few of{' '}
          <a href='http://www.socrata.com'>Socrata</a>'s earliest employees. He
          stuck with us as a fun, friendly, yet unofficial mascot. As the
          company grew, the legend of Snuffleupadata was told and re-told, and
          he invaded our codebase and our hearts.
        </p>

        <p className='text-center'>
          When it came time to pick a company mascot, everyone submitted ideas.
          From 'Owly the Wise Socrata Owl', 'Socrates" to 'Data Dan', we had
          many entries - but none as dynamic and frankly as cute, as
          Snuffleupadata. Once he was chosen as our official employee mascot, we
          worked with an artist for many weeks to bring him to life. Snuffy was
          officially re-born in his original form on June 10th 2014, and has won
          the hearts and minds of many employees, customers and Socrata fans
          over the past year. He stands for the positive changes we're making in
          the world though data, but more than anything he embodies the fun,
          amazing culture that we have and the passion our employees feel about
          our mission.
        </p>
      </div>

      {/* {% for snuffie in site.pages %}
  {% if snuffie.type == 'snuffie' %}
    <div className="row">
      <div className="col-md-4 hidden-phone">
        <a href="{{ snuffie.img }}" data-lightbox="snuffies" data-title="{{ snuffie.title }}">
          <img src="{{ snuffie.img_thumb }}" alt="{{ snuffie.title }}" />
        </a>
      </div>
      <div className="col-md-8">
        <h2>{{ snuffie.title }}</h2>

        {{ snuffie.content | markdownify }}
      </div>
    </div>
  {% endif %}
{% endfor %} */}
    </main>
  )
}

export default HomePage
