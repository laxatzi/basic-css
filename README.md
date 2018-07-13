# basic-css

<h2>Z-index example:</h2>
<p>We have positioned the divs in our example since Z-index only applies to elements that are positioned (that is having a position value other than “static”). </p>
<p>Also,we bear in mind that an element with greater stack order is always in front of an element with a lower stack order. 
In the example since .yellow  is a “child” of  .red  it sits below the .blue , although that its z-index value is bigger.</p>

<h2>Viewport Units example:</h2>
<p>Viewport units are always relative to the browser window or viewport.</p>
<p>That make things very simple in a lot of instances, particularly in responsive web design.<br>
As an example, we don't have to use multiple media queries to adjust hero text to the browser window, we can do just that by using viewport units. </p>

<h2>Semitransparent Borders example:</h2>
<p>An example of  translucent (semi transparent) borders using the background clip property.</p>
<p>We put value to "padding box" in order for the background to not extend underneath borders. This way transparency becomes effective.</p>

<h2>Multiple Borders</h2>
<p>Since we cannot have multiple borders in a div box we use the boxshadow hack. Unlike the border property we can use as many box-shadow(s) as we want, comma seperated.
Bearing in mind that box-shadow(s) are overlaid one on top of the other with the first one on top.</p>
<p>With this method we create fake "borders".
Since these don't affect layout (not part of the box model) we need to emulate the extra space a border would occupy via paddings or margins (depending on the use of the "input" or "output" value).</p>
<p>In this example i wanted the element to be able to capture mouse events so i made the shadows to be inside the div with "input". Otherwise they would not be responsive in mouse events like hovering.</p>

