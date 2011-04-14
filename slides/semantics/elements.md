!SLIDE section

# Semantics #

!SLIDE

# custom data attributes #
## store custom data ##

	@@@ html
	<div
	 class="spaceship"
	 data-ship-id="92432"
     data-weapons="laser 2"
     data-shields="50%"
     data-x="30"
     data-y="10"
     data-z="90">
       
!SLIDE

# links #
## references ##

	@@@ html
	<a rel="archives" …>
	<a rel="author" …>
	<a rel="bookmark" …>
	<a rel="external" …>
	<a rel="noreferer" …>
	<a rel="pingback" …>
	<a rel="prefetch" …>
	<a rel="search" …>
	<a rel="license" …>
	<a rel="prev" …>
	<a rel="next" …>				
	<link rel="icon" …>

!SLIDE

# favicon 2.0 #
## Google Chrome (iphone) ##


	@@@ html
	<link rel="icon" href="gmail_48x48.png"
	sizes=48x48" />	
  
!SLIDE

# sections

	@@@html
	<section>
	<nav>
	<menu>
	<command>
	<aside>
	<article>
	<header>
	<footer>

!SLIDE
## nav
	@@@ html
	<nav>
	  <ul>
	    <li><a href="#">home</a></li>
	    <li><a href="#">blog</a></li>
	    <li><a href="#">gallery</a></li>
	    <li><a href="#">about</a></li>
	  </ul>
	</nav>

	<section class="content">
	...
	</section>

!SLIDE
## menu, command

	@@@ html
		<menu type="toolbar">
		 <li>
			<menu label="File">
			 <button type="button">New...</button>
			 <button type="button">Open...</button>
			 <button type="button">Save</button>
			 <button type="button">Save as...</button>
			</menu>
		 </li>
		</menu>


!SLIDE
## article, header, footer
	@@@ html
	<article>
	  <header>
	    <h1>Kenneth Auchenberg</h1>
	  </header>
	  <p>Lorem ipsum blah blah…</p>

		<footer>
			&copy; 2010, me
		</footer>
	</article>

!SLIDE
## aside
	@@@ html
	<article>
		....

		<footer>
		</footer>

		<aside>
		 <h1>Switzerland</h1>
		 <p>Switzerland, a land-locked country in the middle of geographic
		 Europe, has not joined the geopolitical European Union, though it is
		 a signatory to a number of European treaties.</p>
		</aside>

	</article

!SLIDE

# semantics

	@@@html
	<mark>
	<figure>
	<figcaption>

!SLIDE
## mark
	@@@ html
	<p>I also have some <mark>kitten</mark>s who are visiting me
	these days. They're really cute. I think they like my garden! Maybe I
	should adopt a <mark>kitten</mark>.</p>

!SLIDE
## figure, figcaption
	@@@ html
	<figure>
	 <img src=""
				alt="Bubbles, sitting in his office chair, works on his
						 latest project intently.">
	 <figcaption>Bubbles at work</figcaption>
	</figure>

!SLIDE
# Not for historians #
## Gregorian calendar (1582) ##

	@@@ html
	<time datetime="2011-02-27" pubdate>
	  January 27, 2011
	</time>

!SLIDE
#Document outline

	@@@html
	<hgroup>

!SLIDE

	@@@ html
	<section>
        <h1>Why does IE suck?</h1>
        <h2>The reason why...</h2>
	</section>

<br /><br /><br />
Outline:
<br /><br /><br />
<pre>
  1. Why does IE suck?
   1.1 The reason why...
</pre>
   
!SLIDE

	@@@ html
	<section>
	  <hgroup>
          <h1>Why does IE suck?</h1>
          <h2>The reason why...</h2>
      </hgroup>  
	</section>

<br /><br /><br />
Outline:
<br /><br /><br />
<pre>
  1. Why does IE suck?
</pre>


!SLIDE
# hidden-attribute

	@@@html
	<div hidden>

!SLIDE

	@@@ html
	<div hidden>
      <p>Scch, this is secret</p>
	</section>

	WRONG:

	[hidden] {
		display: none
	}


!SLIDE
# meter and progress

	@@@html
	<meter />
	<progress />

!SLIDE

	@@@html
	<meter min="0" max="100" low="40" high="90"
		optimum="100" value="91">A+</meter>

<meter min="0" max="100" low="40" high="90" optimum="100" value="91" style="margin: 30px 0 30px 50px; width: 700px;">A+</meter>

	@@@	html
	<progress>working...</progress>

<progress style="margin: 30px 0 30px 50px; width: 700px; ">working...</progress>

	@@@ html
	<progress value="75" max="100">3/4 complete</progress>

<progress value="75" max="100" style="margin: 30px 0 30px 50px; width: 700px; ">3/4 complete</progress>


!SLIDE
# ARIA
## Accessible Rich Internet Applications
	@@@html
	<div aria-hidden="true">?

!SLIDE
	@@@html
	<ul aria-role="list">
		..
	</ul>

	<a aria-role="button">
		..
	</a>

!SLIDE
	@@@html
	<button>
	  <img src="button-OFF.png" alt="button is off" />
	</button>

	<button>
	  <img src="button-ON.png" alt="button is on" />
	</button>

!SLIDE
	@@@html
	<button role="button" aria-pressed="false">
	  <img src="button-OFF.png" alt="button is off" />
	</button>

	<button role="button" aria-pressed="true">
	  <img src="button-ON.png" alt="button is on" />
	</button>

!SLIDE
# HTML Microdata
## Machine-readable labels
	@@@html
	<div itemscope>?

!SLIDE center

## Google search
![install](img/microdata.png)

!SLIDE
	@@@html
	<div>
		Pizza Suprema
		Reviewed by Ulysses Grant on Jan 6.
		Delicious, tasty pizza on Eastlake!
		Pizza Suprema serves up traditional wood-fired Neapolitan-style pizza.
		Rating: 4.5
	</div>

!SLIDE
	@@@html
	<div>
		<div itemscope
		itemtype="http://data-vocabulary.org/Review">
			<span itemprop="itemreviewed">Pizza Suprema</span>
			Reviewed by
			<span itemprop="reviewer">Ulysses Grant</span> on

			<time itemprop="dtreviewed" datetime="2009-01-06">
			Jan 6
			</time>.
			
			<span itemprop="summary">
				Delicious, tasty pizza in Eastlake!
			</span>

			<span itemprop="description">
				Pizza Suprema serves up traditional wood-fired Neapolitan-style pizza.
			</span>
				
			Rating: <span itemprop="rating">4.5</span>
		</div>
	</div>