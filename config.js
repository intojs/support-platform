System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.4",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.5",
    "angular-route": "github:angular/bower-angular-route@1.4.4",
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@1.1.0",
    "jquery": "github:components/jquery@2.1.4",
    "ng-sortable": "github:a5hik/ng-sortable@1.3.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:a5hik/ng-sortable@1.3.0": {
      "angular": "github:angular/bower-angular@1.4.4",
      "css": "github:systemjs/plugin-css@0.1.15"
    },
    "github:angular/bower-angular-mocks@1.4.5": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:angular/bower-angular-route@1.4.4": {
      "angular": "github:angular/bower-angular@1.4.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
