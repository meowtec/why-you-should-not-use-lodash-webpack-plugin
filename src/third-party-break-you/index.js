require('@test-packages/use-clamp')

/**
 * you are using _.toNumber in some deep module,
 * at the begining it work as expected.
 *
 * then you import a third-party package (@test-packages/use-clamp),
 * your code get broken.
 */
require('./use-to-number-deep')
