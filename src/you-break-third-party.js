/**
 * you use a third-party package (@test-packages/use-tonumber),
 * at the begining, the third-party is OK.
 *
 * then you start to use `_.clamp`, the thrid-party package get broken
 */
require('@test-packages/use-tonumber')
require('lodash/clamp')
