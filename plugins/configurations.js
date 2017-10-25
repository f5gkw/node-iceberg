'use strict'

const domainsToFilter = ['adf', 'paypal', 'mediafire', 'dropbox', 'box']

/**
 * Class Configuration: Default Configuration Sheets for filtering content.
 * Add new service sheets here
 * @param srv
 * @return {Object}
 */
exports.services = function (srv) {
  switch (srv) {
    case 'blogspot' : return { iteratorElement: { element: 'a', cssClass: 'blog-pager-older-link' }, payload: { element: 'a', attrib: 'href', substrings: domainsToFilter } }
    case 'crawler' : return { iteratorElement: {element: 'a'} }
  }
}