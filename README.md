# AngularJS camelCase To Human Filter


    {{camelCaseString | camelCaseToHuman}}

Converts e.g. myCamelCaseString => My Camel Case String

## Installation

Via [npm](https://www.npmjs.com/package/angular-camelcase-to-human) (Recommended)

    npm install --save angular-camelcase-to-human

This filter also can be installed through [Bower](http://twitter.github.io/bower):

    bower install angularjs-camelCase-human

Load the script:

    <script src="/path/to/camelcase-browser.js></script>

Include the module as a dependency in your application:

    angular.module('MyApp', ['camelCaseToHuman']);

## Usage:

In your template:

    {{ "convertThis" | camelCaseToHuman }}

In your JS:

````javascript
angular.module('MpApp').controller(function($scope, $filter) {
    var camelCase = $filter('camelCaseToHuman');

    $scope.randomThing = camelcase('convertThis');
});
````

## License

This project is licensed under the MIT license.
