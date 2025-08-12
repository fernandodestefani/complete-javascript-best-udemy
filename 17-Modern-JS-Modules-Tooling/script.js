'use strict';

////////////////////////////////////
// overview of modern javascript development
//npm: both repository and software to install packages. it also contains development tools like parcel 
//build process: webpack or parcel (0 configuration bundle) - (bundlers)
// 1 bundling - join all modules into one file;
// 2 transpiling/polyfiling => convert modern js back to ES5, usually done using a tool called babel
// javascript bundle ready to be deployed on a server for production

////////////////////////////////////
// overview of modules in js
// public API is what we export from modules 
// native js (ES6) modules: modules stored in files, exactly one module per file.
// imports and exports need to happen at top-level, outside of any function or any if block. imports are hoisted
// html linking <script type='module'>
// importing modules before execution 
// modules are imported synchronously, which is possible thanks to top-level ('static') imports, which make imports known before execution. this makes bundling and dead code elimination possible

////////////////////////////////////
// exporting and importing in es6 modules

