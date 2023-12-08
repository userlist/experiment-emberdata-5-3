# Ember Data 5.3 Experiment

This project is an experiment to isolate and showcase a unexpected behavior of `ember-data@5.3`, which is not seen on `ember-data@5.2`.
It contains a few models, with some of them being polymorphic, as well as the usage of the `{ preload }` option of `findRecord` to build property URLs containing the entity model id.
Below are the steps to reproduce the error manually and with tests through ember try scenarios.

## Reproduction

* `git clone <repository-url>` this repository
* `cd experiment-emberdata-5-3`
* `yarn`

### Manually

* `ember s`
* Base entity model
  * Works as intended
  * Steps:
    * Open `http://localhost:4200`
    * Click the "Entity" link
    * Click "foo" link
    * Click "property 2: foo > bar" link
    * Click "property 3: foo > bar > baz" link
* Company entity model (polymorphic)
  * Triggers the error
  * Steps:
    * Open `http://localhost:4200/company_1`
    * Click "foo" link
      * Triggers the error
    * Reload the page
    * Click "property 5: foo > bar"
      * Triggers the error again

### Tests

* There are tests using the entity model and the company model, which is an extension of the entity model
* `ember try:each`
  * The tests using the company model pass on the Ember Data 5.2 scenario
  * The tests using the company model fail on the Ember Data 5.3 scenario
