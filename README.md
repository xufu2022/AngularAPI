# AngularAPI

## Creating Components

    -- ng g c navbar
    ng g c core/components/navbar --dry-run
    ng g c core/components/navbar
    ng g c features/category/category-list --dry-run
    ng g c features/category/add-category --dry-run
    ng g s features/category/services/category --dry-run
    ng g environments --dry-run
    ng g c features/category/edit-category --dry-run
    ng g c features/blog-post/blogpost-list --dry-run
    ng g c features/blog-post/add-blogpost --dry-run
    ng g c features/blog-post/edit-blogpost
    npm install ngx-markdown

## Async Pipe

    the async pipe is an angualr feature that simplifies working with observables or promises in your templates. 
    It automatically subscribes to an observable or resolves a promise and update the template with the emitted values.

## forRoot

In Angular, .forRoot() is a conventional method used with Angular modules, especially when you're dealing with feature or shared modules that might provide services or values that should be instantiated and provided once across the entire application.

modify angular.json file for scripts and css