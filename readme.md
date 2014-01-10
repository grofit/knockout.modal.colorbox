# Knockout.Modal.Colorbox

A simple binding to allow you to easily add modal behaviours to your project.

## More Info
This implementation relies upon colorbox but the idea is that the `ko.modal.*` namespace could be an abstraction
for different implementations such as lightbox etc. The options argument within the binding should be generic and 
converted under the hood into the native options whereas there is currently a `nativeOptions` which allows you to 
set colorbox specific options.

## Example

A simple example of setting up a modal:
```
<a data-bind="modal: { content: '#modal-content' }">Show Modal</a>
<div id="modal-content">Some Content</div>
```

The binding should ALWAYS have a content argument which is the jquery selector for the modal element to be shown
in the modal window. There are pros and cons of doing it this way vs ajax templates, however it is difficult to have
knockout bindings on dynamically loaded ajax elements so it is simpler all round to just load all modal windows
as inline elements which just move the content around to allow the bindings to continue to work.

The available options for this binding are:

* **content** - The jquery selector for the modal content element
* **options** - The collection of options for the modal instance, see below for available options
 * **title** - The title to display on the modal
 * **width** - The hardcoded width in pixels or percentage of the width
 * **height** - The hardcoded height in pixels or percentage of the height
 * **onOpening** - The callback for when the modal has begun opening
 * **onOpened** - The callback for when the modal has finished opening
 * **onClosing** - The callback for when the modal has started closing
 * **onClosed** - The callback for when the modal has finished closing
 * **nativeOptions** - This is the collection of options which are colorbox specific, see the colorbox site for more information

Here is an example of what it does and how to use it.
[View Example](https://rawgithub.com/grofit/knockout.modal.colorbox/master/example.html)