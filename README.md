# basic-css

<h2>Z-index example:</h2>
<p>We have positioned the divs in our example since Z-index only applies to elements that are positioned (that is having a position value other than “static”). </p>
<p>Also,we bear in mind that an element with greater stack order is always in front of an element with a lower stack order. 
In the example since .yellow  is a “child” of  .red  it sits below the .blue , although that its z-index value is bigger.</p>

<h2>Viewport Units example:</h2>
<p>Viewport units are always relative to the browser window or viewport.</p>
<p>That make things very simple in a lot of instances, particularly in responsive web design.<br>
As an example, we don't have to use multiple media queries to adjust hero text to the browser window, we can do just that by using viewport units. </p>
